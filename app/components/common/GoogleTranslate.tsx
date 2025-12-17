"use client";

import { useEffect, useRef } from "react";

export const GoogleTranslate = () => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Check if script already exists
    if (document.getElementById("google-translate-script") || scriptLoadedRef.current) {
      return;
    }

    // Initialize Google Translate callback
    (window as any).googleTranslateElementInit = () => {
      try {
        // Wait a bit for the API to be fully available
        setTimeout(() => {
          if (!(window as any).google || !(window as any).google.translate) {
            console.error("Google Translate API not available");
            return;
          }
          
          const element = document.getElementById("google_translate_element_hidden");
          if (!element) {
            console.error("Translate element not found");
            return;
          }

          try {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,es",
                layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              },
              "google_translate_element_hidden"
            );
            
            // Mark as loaded after initialization
            setTimeout(() => {
              scriptLoadedRef.current = true;
            }, 500);
          } catch (error) {
            console.error("Error creating TranslateElement:", error);
          }
        }, 100);
      } catch (error) {
        console.error("Error in googleTranslateElementInit:", error);
      }
    };

    // Add Google Translate script
    const addScript = () => {
      // Check if already added
      if (document.getElementById("google-translate-script")) {
        return;
      }

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate script");
      };
      document.body.appendChild(script);
    };

    // Ensure DOM is ready
    if (document.body) {
      addScript();
    } else {
      window.addEventListener("DOMContentLoaded", addScript);
    }
  }, []);


  // Hide Google Translate bars (optimized to prevent infinite loops)
  useEffect(() => {
    let isProcessing = false;
    
    const hideBars = () => {
      // Prevent infinite loops
      if (isProcessing) return;
      isProcessing = true;
      
      try {
        // Only hide specific Google Translate elements
        const selectors = [
          '.goog-te-banner-frame',
          '.skiptranslate',
          '#google_translate_element'
        ];
        
        let foundAny = false;
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            const htmlEl = el as HTMLElement;
            // Only modify if not already hidden
            if (htmlEl.style.display !== 'none') {
              htmlEl.style.display = 'none';
              htmlEl.style.visibility = 'hidden';
              htmlEl.style.height = '0';
              htmlEl.style.overflow = 'hidden';
              foundAny = true;
            }
          });
        });
        
        // Only modify body if needed
        if (document.body.classList.contains('top')) {
          document.body.classList.remove('top');
          document.body.style.paddingTop = '0';
        }
      } finally {
        isProcessing = false;
      }
    };

    // Run once after a short delay
    const timeout = setTimeout(hideBars, 500);
    
    // Run on a longer interval (less aggressive)
    const interval = setInterval(hideBars, 1000);
    
    // Use a more targeted MutationObserver
    const observer = new MutationObserver((mutations) => {
      // Only process if Google Translate elements are added
      const hasTranslateElements = mutations.some(mutation => {
        return Array.from(mutation.addedNodes).some(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            return el.classList?.contains('goog-te-banner-frame') ||
                   el.classList?.contains('skiptranslate') ||
                   el.id === 'google_translate_element';
          }
          return false;
        });
      });
      
      if (hasTranslateElements) {
        hideBars();
      }
    });

    // Only observe direct children, not entire subtree
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: false // Changed from true to false to prevent infinite loops
      });
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hidden Google Translate Element - Must be visible for Google to initialize */}
      <div 
        id="google_translate_element_hidden" 
        style={{ 
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }} 
      />
    </>
  );
};
