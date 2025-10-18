'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export function HeroSection() {
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Mobile: Meet Luna Section First */}
          <div className="lg:hidden order-1">
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=face"
                  alt="Featured Pet"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Featured Pet</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Meet Luna</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  A beautiful golden retriever who loves adventures and making new friends. 
                  She&apos;s been part of our community for over 2 years.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      <Image 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                        alt="Pet lover 1" 
                        width={32}
                        height={32}
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                      <Image 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" 
                        alt="Pet lover 2" 
                        width={32}
                        height={32}
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                      <Image 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                        alt="Pet lover 3" 
                        width={32}
                        height={32}
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                    </div>
                  </div>
                  <Link href={`/${locale}/blog`} className="inline-flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
                    <span>Read More</span>
                    <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Wellness Journey Content Second */}
          <div className="lg:hidden order-2 space-y-6 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-gray-300/50 dark:border-gray-700/50">
                <StarIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  Trusted by 10,000+ Pet Owners
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Your Pet&apos;s
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}Wellness Journey
                </span>
              </h1>
              
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover expert advice on pet wellness exams, preventive care, and connect with a community that truly understands the joy of pet ownership.
              </p>
            </div>

            <div className="flex flex-col gap-3 justify-center">
              <Link href={`/${locale}/blog`} className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-4 py-3 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <span>Explore Articles</span>
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-3 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Happy Pet Owners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Pet Experts</div>
              </div>
            </div>
          </div>

          {/* Desktop: Left Content - Wellness Journey */}
          <div className="hidden lg:block space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-300/50 dark:border-gray-700/50">
                <StarIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Trusted by 10,000+ Pet Owners
                </span>
              </div>
              
              <h1 className="text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Your Pet&apos;s
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}Wellness Journey
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover expert advice on pet wellness exams, preventive care, and connect with a community that truly understands the joy of pet ownership.
              </p>
            </div>

            <div className="flex gap-4 justify-start">
              <Link href={`/${locale}/blog`} className="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                <span>Explore Articles</span>
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                Get In Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">10K+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Happy Pet Owners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Pet Experts</div>
              </div>
            </div>
          </div>

          {/* Desktop: Right Content - Featured Pet */}
          <div className="hidden lg:block relative">
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96">
                <Image
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=face"
                  alt="Featured Pet"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Featured Pet</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Meet Luna</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                  A beautiful golden retriever who loves adventures and making new friends. 
                  She&apos;s been part of our community for over 2 years.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <Image 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                        alt="Pet lover 1" 
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                      <Image 
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" 
                        alt="Pet lover 2" 
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                      <Image 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                        alt="Pet lover 3" 
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                    </div>
                  </div>
                  <Link href={`/${locale}/blog`} className="inline-flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-base">
                    <span>Read More</span>
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-400 dark:to-gray-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

      </div>
    </section>
  );
}