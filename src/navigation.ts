import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'fr', 'es', 'de', 'ar', 'it', 'pt', 'ja', 'zh', 'hi', 'ko', 'ru', 'nl', 'tr', 'pl'] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
