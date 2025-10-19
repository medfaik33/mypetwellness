import { Metadata } from 'next';
import Link from 'next/link';
import { StructuredData } from '@/components/StructuredData';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
      const baseUrl = 'https://mypetwellness.site';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`;

  return {
    title: 'About Us - My Pet Wellness',
    description: 'Learn about My Pet Wellness, your trusted source for pet wellness exams, preventive care, and comprehensive pet health guidance from veterinary experts.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'About Us - My Pet Wellness',
      description: 'Learn about My Pet Wellness, your trusted source for pet wellness exams, preventive care, and comprehensive pet health guidance from veterinary experts.',
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <StructuredData type="about" />
      <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About My Pet Wellness
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for pet wellness exams, preventive care, and comprehensive pet health guidance.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Our Mission
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              At My Pet Wellness, we believe that every pet deserves the best possible care. Our mission is to provide pet owners with expert guidance on pet wellness exams, preventive care, and comprehensive health management to ensure their furry friends live long, healthy, and happy lives.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We combine the expertise of certified veterinarians with the latest research in pet health to deliver reliable, evidence-based information that empowers pet owners to make informed decisions about their pets&apos; wellbeing.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Expertise
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Our content is created and reviewed by certified veterinarians and pet health professionals.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Trust
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide reliable, evidence-based information that pet owners can trust for their pets&apos; health.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Compassion
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                We understand the deep bond between pets and their owners and approach every topic with empathy.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Our Team
          </h2>
          <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My Pet Wellness is powered by a team of passionate pet health professionals, including certified veterinarians, veterinary technicians, and pet care specialists. Our diverse team brings together decades of experience in various aspects of pet health and wellness.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Each team member is dedicated to staying current with the latest developments in veterinary medicine and pet care, ensuring that our content reflects the most up-to-date best practices in pet wellness exams and preventive care.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
              Have questions about pet wellness exams or need personalized advice? We&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
