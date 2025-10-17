import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { VetExpertsSection } from '@/components/home/VetExpertsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { FAQSection } from '@/components/home/FAQSection';
import { StructuredData } from '@/components/StructuredData';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
      const baseUrl = 'https://mypetwellness.site';
      const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: 'Pet Wellness Exams & Preventive Care - MyPetWellness',
    description: 'Expert guidance on pet wellness exams, preventive care, and comprehensive pet health. Trusted veterinary advice for your pet\'s optimal wellness journey.',
    keywords: 'pet wellness exams, pet preventive care, veterinary wellness, pet health checkups, animal wellness, pet care tips',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Pet Wellness Exams & Preventive Care - MyPetWellness',
      description: 'Expert guidance on pet wellness exams, preventive care, and comprehensive pet health. Trusted veterinary advice for your pet\'s optimal wellness journey.',
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <StructuredData type="home" />
      <StructuredData type="faq" />
      <div className="min-h-screen">
        <HeroSection />
        <FeaturedArticles />
        <VetExpertsSection />
        <FAQSection />
        <NewsletterSection />
      </div>
    </>
  );
}
