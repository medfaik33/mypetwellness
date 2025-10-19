import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get('x-next-intl-locale') || 'en';
  
  return {
    locale,
    messages: (await import(`../src/messages/${locale}.json`)).default
  };
});
