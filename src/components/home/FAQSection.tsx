'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How often should my pet have a wellness exam?',
    answer: 'Pet wellness exams should be scheduled annually for adult pets, twice yearly for senior pets (7+ years), and more frequently for puppies and kittens. These preventive care visits help catch health issues early and ensure your pet stays healthy.'
  },
  {
    id: '2',
    question: 'What should I feed my pet for optimal health?',
    answer: 'The best diet depends on your pet\'s species, age, size, and health conditions. High-quality commercial pet foods that meet AAFCO standards are generally recommended. Consult your veterinarian for specific dietary recommendations.'
  },
  {
    id: '3',
    question: 'How can I help my pet with separation anxiety?',
    answer: 'Gradual desensitization, creating a safe space, providing mental stimulation, and maintaining a consistent routine can help. For severe cases, consult a veterinarian or animal behaviorist for professional guidance.'
  },
  {
    id: '4',
    question: 'What does a comprehensive pet wellness exam include?',
    answer: 'A complete pet wellness exam includes physical examination, weight monitoring, dental check, heart and lung evaluation, blood work, parasite screening, and vaccination updates. Your veterinarian will also discuss nutrition, behavior, and preventive care recommendations.'
  },
  {
    id: '5',
    question: 'How much exercise does my pet need?',
    answer: 'Exercise needs vary by breed, age, and health. Dogs typically need 30 minutes to 2 hours of exercise daily, while cats benefit from 15-30 minutes of active play. Consult your veterinarian for specific recommendations.'
  },
  {
    id: '6',
    question: 'When should I start training my pet?',
    answer: 'Training can begin as early as 8 weeks old for puppies and kittens. Start with basic commands and house training. Early socialization and positive reinforcement are key to successful training.'
  },
  {
    id: '7',
    question: 'How can I keep my pet safe during holidays?',
    answer: 'Keep toxic foods, decorations, and plants out of reach. Ensure your pet has a quiet space to retreat to. Consider microchipping and proper identification in case your pet gets lost during busy holiday periods.'
  },
  {
    id: '8',
    question: 'What should I do if my pet ingests something toxic?',
    answer: 'Contact your veterinarian or the Pet Poison Helpline immediately. Don\'t induce vomiting unless specifically instructed. Keep the packaging of the ingested substance to help identify the toxin.'
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-600 rounded-full opacity-10 blur-xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm border border-gray-300/50 dark:border-gray-700/50 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Pet Wellness Exams
            <span className="text-gray-600 dark:text-gray-300">
              {" "}& Care Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Find answers to common questions about pet wellness exams, preventive care, and overall pet health from our community of veterinary experts.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300" />
                    )}
                  </div>
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6">
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-100 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Still have questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              Our team of pet experts is here to help you provide the best care for your furry friends.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              <span>Contact Our Experts</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
