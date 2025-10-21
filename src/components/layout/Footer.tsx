'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { 
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/mypetwellness', 
      color: 'hover:bg-blue-600',
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/mypetwellness', 
      color: 'hover:bg-pink-600',
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/mypetwellness', 
      color: 'hover:bg-blue-700',
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
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
