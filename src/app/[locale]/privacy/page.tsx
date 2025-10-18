import { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
      const baseUrl = 'https://mypetwellness.site';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/privacy` : `${baseUrl}/${locale}/privacy`;

  return {
    title: 'Privacy Policy - My Pet Wellness',
    description: 'Learn how My Pet Wellness protects your privacy and handles your personal information when you use our pet wellness resources.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Privacy Policy - My Pet Wellness',
      description: 'Learn how My Pet Wellness protects your privacy and handles your personal information when you use our pet wellness resources.',
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default function PrivacyPage() {
  return (
    <>
      <StructuredData type="privacy" />
      <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              1. Information We Collect
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Name and email address when subscribing to our newsletter</li>
                <li>Contact information when you reach out to us</li>
                <li>Pet information when seeking advice or consultations</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              2. How We Use Your Information
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Provide pet wellness information and resources</li>
                <li>Send newsletters and updates about pet care</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              3. Information Sharing
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in website operation</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              4. Data Security
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              5. Cookies and Tracking
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and user experience</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              6. Your Rights
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              7. Contact Us
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-base text-gray-600 dark:text-gray-300">
                <p>Email: privacy@mypetwellness.site</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Pet Street, Animal City, AC 12345</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
