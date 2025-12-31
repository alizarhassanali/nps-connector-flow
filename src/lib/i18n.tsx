import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en, TranslationKeys } from '@/translations/en';
import { fr } from '@/translations/fr';
import { es } from '@/translations/es';

type Language = 'en' | 'fr' | 'es';

type Translations = Record<TranslationKeys, string>;

const translations: Record<Language, Translations> = {
  en,
  fr: fr as Translations,
  es: es as Translations,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = 'preferred-language';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANGUAGE_KEY) as Language;
      if (saved && ['en', 'fr', 'es'].includes(saved)) {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
  };

  const t = (key: TranslationKeys): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
