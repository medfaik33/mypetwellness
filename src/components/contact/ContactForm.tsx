'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { EnvelopeIcon, CheckIcon, XMarkIcon, PaperAirplaneIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    petType: '',
    urgency: 'normal'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const t = useTranslations('contact.form');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        petType: '',
        urgency: 'normal'
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-full blur-2xl translate-y-12 -translate-x-12"></div>
      
      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <SparklesIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Send us a Message
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you as soon as possible. 
            Our pet experts are here to help!
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Full Name *
              </label>
              <Input
                type="text"
                value={formData.name}
                placeholder="Your full name"
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="h-12 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email Address *
              </label>
              <Input
                type="email"
                value={formData.email}
                placeholder="your.email@example.com"
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="h-12 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Subject and Pet Type */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Subject *
              </label>
              <Input
                type="text"
                value={formData.subject}
                placeholder="What's this about?"
                onChange={(e) => handleInputChange('subject', e.target.value)}
                required
                className="h-12 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Pet Type
              </label>
              <select
                value={formData.petType}
                onChange={(e) => handleInputChange('petType', e.target.value)}
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <option value="">Select pet type</option>
                <option value="dog">🐕 Dog</option>
                <option value="cat">🐱 Cat</option>
                <option value="bird">🐦 Bird</option>
                <option value="fish">🐠 Fish</option>
                <option value="rabbit">🐰 Rabbit</option>
                <option value="other">🐾 Other</option>
              </select>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-2"
          >
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Message *
            </label>
            <Textarea
              value={formData.message}
              placeholder="Tell us how we can help you and your pet..."
              rows={6}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              loading={status === 'loading'}
              disabled={status === 'success'}
            >
              {status === 'success' ? (
                <span className="flex items-center justify-center">
                  <CheckIcon className="h-6 w-6 mr-3" />
                  Message Sent Successfully!
                </span>
              ) : status === 'error' ? (
                <span className="flex items-center justify-center">
                  <XMarkIcon className="h-6 w-6 mr-3" />
                  Try Again
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <PaperAirplaneIcon className="h-6 w-6 mr-3" />
                  Send Message
                </span>
              )}
            </Button>
          </motion.div>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl"
          >
            <div className="flex items-center">
              <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              <p className="text-green-800 dark:text-green-200 font-medium">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you within 2 hours.
              </p>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl"
          >
            <div className="flex items-center">
              <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
              <p className="text-red-800 dark:text-red-200 font-medium">
                Oops! Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          </motion.div>
        )}

        {/* Privacy Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center">
              <ShieldCheckIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Privacy & Security
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Your information is secure and will never be shared with third parties. 
                We typically respond within 2 hours during business hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}