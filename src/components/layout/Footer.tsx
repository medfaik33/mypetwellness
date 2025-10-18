'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { 
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const socialLinks = [
    { name: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', href: '#', color: 'hover:bg-blue-400' },
    { name: 'Instagram', href: '#', color: 'hover:bg-pink-600' },
    { name: 'YouTube', href: '#', color: 'hover:bg-red-600' },
  ];

      const footerLinks = [
        { name: t('links.about'), href: `/${locale}/about` },
        { name: t('links.privacy'), href: `/${locale}/privacy` },
        { name: t('links.terms'), href: `/${locale}/terms` },
        { name: t('links.contact'), href: `/${locale}/contact` },
      ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <Logo className="text-white text-xl sm:text-2xl" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted companion for all things pets. Join our community of passionate pet owners and experts.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 ${item.color} rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110`}
                  aria-label={item.name}
                >
                  <GlobeAltIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Categories</h3>
            <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href={`/${locale}/blog?category=nutrition`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Pet Nutrition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/blog?category=training`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Training Tips
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/blog?category=health`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Health & Wellness
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${locale}/blog?category=breeds`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Pet Breeds
                    </Link>
                  </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-semibold text-white">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to get the latest pet tips, stories, and community updates.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 sm:py-3 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm">
                <EnvelopeIcon className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-2 sm:pt-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-xs sm:text-sm">
                <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
                <span>123 Pet Street, Animal City</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 text-xs sm:text-sm">
                <PhoneIcon className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
                <span>+1 (555) 123-PETS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 PawVerse. All rights reserved. Made with ❤️ for pet lovers.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link
                href="/sitemap.xml"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
              >
                Sitemap
              </Link>
              <Link
                href="/rss.xml"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
              >
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
