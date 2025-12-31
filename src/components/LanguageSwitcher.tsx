import { useTranslation } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  const languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'fr' as const, label: 'FR' },
    { code: 'es' as const, label: 'ES' },
  ];

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex items-center gap-1">
        {languages.map((lang, index) => (
          <span key={lang.code} className="flex items-center">
            <button
              onClick={() => setLanguage(lang.code)}
              className={`px-2 py-1 text-sm rounded transition-colors ${
                language === lang.code
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {lang.label}
            </button>
            {index < languages.length - 1 && (
              <span className="text-muted-foreground/50">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
