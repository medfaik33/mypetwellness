import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'es', 'de', 'ar', 'it', 'pt', 'ja', 'zh', 'hi', 'ko', 'ru', 'nl', 'tr', 'pl'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always show the locale in the URL
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|fr|es|de|ar|it|pt|ja|zh|hi|ko|ru|nl|tr|pl)/:path*']
};