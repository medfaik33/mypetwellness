'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export function ContactInfo() {
  const t = useTranslations('contact.info');

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'hello@mypetwellness.site',
      action: 'mailto:hello@mypetwellness.site',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Speak with our team directly',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      description: 'Come see us in person',
      contact: '123 Pet Street, Animal City, AC 12345',
      action: 'https://maps.google.com',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Information Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Information
        </h2>

        {/* Contact Methods */}
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block group"
            >
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {method.description}
                  </p>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    {method.contact}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <ClockIcon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Office Hours
          </h3>
        </div>
        <div className="space-y-4">
          {officeHours.map((schedule) => (
            <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {schedule.day}
              </span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}