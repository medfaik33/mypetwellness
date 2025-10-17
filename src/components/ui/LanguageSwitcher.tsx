'use client';

import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'de', name: 'DE', flag: '🇩🇪' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <div className="relative">
      <button className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
        <span>{currentLanguage.flag}</span>
      </button>
    </div>
  );
}