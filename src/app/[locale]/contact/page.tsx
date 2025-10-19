import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { FAQ } from '@/components/contact/FAQ';
import { StructuredData } from '@/components/StructuredData';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
      const baseUrl = 'https://mypetwellness.site';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/contact` : `${baseUrl}/${locale}/contact`;

  return {
    title: t('title'),
    description: t('subtitle'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <StructuredData type="contact" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container-max section-padding py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </>
  );
}
