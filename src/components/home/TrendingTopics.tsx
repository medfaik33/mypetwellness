'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  HeartIcon, 
  FireIcon, 
  ChatBubbleLeftRightIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

const trendingTopics = [
  {
    name: 'Dog Training',
    count: 1247,
    icon: '🐕',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
  },
  {
    name: 'Cat Behavior',
    count: 892,
    icon: '🐱',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
  },
  {
    name: 'Pet Nutrition',
    count: 1563,
    icon: '🥘',
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
  },
  {
    name: 'Health & Wellness',
    count: 2105,
    icon: '🏥',
    color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
  },
  {
    name: 'Pet Adoption',
    count: 743,
    icon: '🏠',
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
  },
  {
    name: 'Grooming Tips',
    count: 634,
    icon: '✂️',
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
  }
];

export function TrendingTopics() {
  const t = useTranslations('home.trending');

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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTopics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog?tag=${topic.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-white dark:bg-neutral-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{topic.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {topic.name}
                        </h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {topic.count.toLocaleString()} articles
                        </p>
                      </div>
                    </div>
                    <FireIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${topic.color}`}>
                      Trending
                    </span>
                    <div className="flex items-center space-x-1 text-neutral-500 dark:text-neutral-400">
                      <StarIcon className="h-4 w-4" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-full mb-4">
                <HeartIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                50K+
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Pet Lovers
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-full mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                10K+
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Articles
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent-100 dark:bg-accent-900 p-4 rounded-full mb-4">
                <StarIcon className="h-8 w-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                5K+
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Pet Photos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
