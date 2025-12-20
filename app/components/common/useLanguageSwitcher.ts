"use client";

import { useState, useEffect } from "react";

export const useLanguageSwitcher = () => {
  // Initialize from localStorage if available (for faster initial render)
  const getInitialLang = (): "en" | "es" => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("altura-lang");
      if (stored === "es" || stored === "en") {
        return stored;
      }
    }
    return "en";
  };
  
  const [currentLang, setCurrentLang] = useState<"en" | "es">(getInitialLang());
  const [isOpen, setIsOpen] = useState(false);

  const detectLanguage = () => {
    // First check localStorage (most reliable)
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("altura-lang");
      if (storedLang === "es" || storedLang === "en") {
        setCurrentLang(storedLang);
        return;
      }
    }
    
    // Check current language from cookie
    const cookies = document.cookie.split(";");
    const googtransCookie = cookies.find(c => c.trim().startsWith("googtrans="));
    
    if (googtransCookie) {
      const lang = googtransCookie.includes("/es") ? "es" : "en";
      setCurrentLang(lang);
      // Store in localStorage for faster access
      if (typeof window !== "undefined") {
        localStorage.setItem("altura-lang", lang);
      }
    } else {
      // Check if Google Translate has already translated the page
      const body = document.body;
      if (body.classList.contains("translated-ltr") || body.classList.contains("translated-rtl")) {
        // Check the actual language from the translate element
        const select = document.querySelector<HTMLSelectElement>("#google_translate_element_hidden select, .goog-te-combo");
        if (select && select.value === "es") {
          setCurrentLang("es");
          if (typeof window !== "undefined") {
            localStorage.setItem("altura-lang", "es");
          }
        }
      } else {
        // Default to English if nothing is detected
        setCurrentLang("en");
        if (typeof window !== "undefined") {
          localStorage.setItem("altura-lang", "en");
        }
      }
    }
  };

  useEffect(() => {
    detectLanguage();
    
    // Check periodically for language changes (in case cookie is set asynchronously)
    const interval = setInterval(() => {
      detectLanguage();
    }, 500);
    
    // Also listen for DOM changes that might indicate translation
    const observer = new MutationObserver(() => {
      detectLanguage();
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const switchLanguage = (lang: "en" | "es") => {
    setCurrentLang(lang);
    setIsOpen(false);
    
    // Store in localStorage immediately
    if (typeof window !== "undefined") {
      localStorage.setItem("altura-lang", lang);
    }
    
    // Set cookie for Google Translate
    if (lang === "en") {
      // Remove translation cookie to show English
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    } else {
      // Set translation cookie
      document.cookie = `googtrans=/en/${lang}; path=/; max-age=31536000; SameSite=Lax`;
      document.cookie = `googtrans=/en/${lang}; path=/; domain=${window.location.hostname}; max-age=31536000; SameSite=Lax`;
    }
    
    // Try to trigger translation via select element
    const select = document.querySelector<HTMLSelectElement>("#google_translate_element_hidden select, .goog-te-combo");
    if (select) {
      select.value = lang;
      const event = new Event("change", { bubbles: true });
      select.dispatchEvent(event);
    }
    
    // Reload to apply translation
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  return {
    currentLang,
    isOpen,
    setIsOpen,
    switchLanguage,
  };
};
