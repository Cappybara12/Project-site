"use client";

import { useState, useEffect } from "react";

export const useLanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "es">("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check current language from cookie
    const cookies = document.cookie.split(";");
    const googtransCookie = cookies.find(c => c.trim().startsWith("googtrans="));
    
    if (googtransCookie) {
      const lang = googtransCookie.includes("/es") ? "es" : "en";
      setCurrentLang(lang);
    }
  }, []);

  const switchLanguage = (lang: "en" | "es") => {
    setCurrentLang(lang);
    setIsOpen(false);
    
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
