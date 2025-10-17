import { Metadata } from 'next';
import { StructuredData } from '@/components/StructuredData';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
      const baseUrl = 'https://mypetwellness.site';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/terms` : `${baseUrl}/${locale}/terms`;

  return {
    title: 'Terms of Service - MyPetWellness',
    description: 'Read our Terms of Service to understand the rules and guidelines for using MyPetWellness pet wellness resources.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Terms of Service - MyPetWellness',
      description: 'Read our Terms of Service to understand the rules and guidelines for using MyPetWellness pet wellness resources.',
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default function TermsPage() {
  return (
    <>
      <StructuredData type="terms" />
      <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our pet wellness resources and services.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Acceptance */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              1. Acceptance of Terms
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using MyPetWellness, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          {/* Use License */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              2. Use License
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of MyPetWellness materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on MyPetWellness</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              3. Medical Disclaimer
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                The information provided on MyPetWellness is for educational and informational purposes only and is not intended as medical advice. Always consult with a qualified veterinarian regarding your pet&apos;s health and wellness exams.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Our content does not replace professional veterinary care</li>
                <li>Always seek immediate veterinary attention for medical emergencies</li>
                <li>Individual pets may have unique health considerations</li>
                <li>Treatment decisions should be made in consultation with your veterinarian</li>
              </ul>
            </div>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              4. User Conduct
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You agree not to use MyPetWellness to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-300 ml-4">
                <li>Post or transmit any unlawful, threatening, defamatory, or inappropriate content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Harass or harm other users</li>
              </ul>
            </div>
          </section>

          {/* Content Ownership */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              5. Content Ownership
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                All content on MyPetWellness, including but not limited to text, graphics, logos, images, and software, is the property of MyPetWellness and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from our content without express written permission.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              6. Limitation of Liability
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                In no event shall MyPetWellness or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MyPetWellness.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              7. Termination
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to terminate or suspend your access to MyPetWellness at any time, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              8. Changes to Terms
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              9. Contact Information
            </h2>
            <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-base text-gray-600 dark:text-gray-300">
                <p>Email: legal@mypetwellness.site</p>
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
