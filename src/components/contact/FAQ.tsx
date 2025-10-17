'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How do I adopt a pet through PawVerse?',
    answer: 'Adopting a pet through PawVerse is easy! Browse our gallery of available pets, find one you love, and contact the owner directly. We facilitate the connection between pet owners and potential adopters, making the process smooth and safe for everyone involved.'
  },
  {
    question: 'What should I do if my pet is lost?',
    answer: 'If your pet is lost, immediately post their information in our gallery with recent photos and your contact details. Also check local shelters, post on social media, and notify your neighborhood. The more people who know, the better chance of finding your beloved pet.'
  },
  {
    question: 'Are there any fees for using PawVerse?',
    answer: 'PawVerse is completely free to use! We believe that finding loving homes for pets should be accessible to everyone. Our platform is supported by donations and partnerships with pet-related businesses.'
  },
  {
    question: 'How do I know if a pet is right for my family?',
    answer: 'We recommend researching the pet\'s breed, temperament, and care requirements. Ask the current owner detailed questions about the pet\'s behavior, health history, and any special needs. Consider your lifestyle, living situation, and ability to provide proper care.'
  },
  {
    question: 'What if I need to rehome my pet?',
    answer: 'We understand that circumstances change. When rehoming your pet, be honest about their personality, health, and any behavioral issues. Take good photos and write a detailed description. Screen potential adopters carefully to ensure they can provide a loving, permanent home.'
  },
  {
    question: 'How can I contribute to the PawVerse community?',
    answer: 'You can contribute by sharing your pet\'s photos, writing helpful blog posts, volunteering at local shelters, or donating to animal welfare organizations. Every small action helps create a better world for our furry friends!'
  },
  {
    question: 'Is PawVerse available in my country?',
    answer: 'PawVerse is currently available in multiple languages and regions. We\'re constantly expanding to serve pet lovers worldwide. Check our language selector to see if your region is supported, and contact us if you\'d like to see PawVerse in your area.'
  },
  {
    question: 'How do I report inappropriate content or behavior?',
    answer: 'If you encounter inappropriate content or behavior on our platform, please report it immediately using the flag button on any post or by contacting our support team. We take all reports seriously and will investigate promptly to maintain a safe community.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
            <QuestionMarkCircleIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Find answers to common questions about pet adoption, care, and using PawVerse
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-700 rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-600 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-neutral-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@pawverse.com"
                className="btn-primary"
              >
                Contact Support
              </a>
              <Link
                href="/contact"
                className="btn-outline"
              >
                Visit Contact Page
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
