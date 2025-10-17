'use client';

import { useState } from 'react';
import { EnvelopeIcon, CheckIcon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-full opacity-20 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-400 dark:to-gray-500 rounded-full opacity-10 blur-2xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            {/* Header */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
              <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">
                Join Our Community
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Stay Updated with
              <span className="text-gray-600 dark:text-gray-300">
                {" "}Pet Stories
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Get the latest pet care tips, heartwarming stories, and expert advice delivered straight to your inbox. 
              Join thousands of pet lovers who trust us for their daily dose of pet inspiration.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl focus:border-gray-500 dark:focus:border-gray-400 focus:ring-gray-500 dark:focus:ring-gray-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm sm:text-base">Subscribing...</span>
                    </div>
                  ) : status === 'success' ? (
                    <div className="flex items-center space-x-2">
                      <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">Subscribed!</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">Subscribe</span>
                    </div>
                  )}
                </Button>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                  <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">Welcome to our community! Check your email for confirmation.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg">
                  <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">Something went wrong. Please try again.</span>
                </div>
              )}
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">10K+</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Happy Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Weekly</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Expert Tips</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Free Content</div>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-4">
              We respect your privacy. Unsubscribe at any time. No spam, just pure pet love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}