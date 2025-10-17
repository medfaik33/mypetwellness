'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, EyeIcon } from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';

interface RelatedArticlesProps {
  currentPostId: string;
}

const relatedArticles = [
  {
    id: '2',
    title: 'Cat Nutrition: What Every Owner Should Know About Feline Dietary Needs',
    excerpt: 'Discover the nutritional needs of cats at different life stages and how to choose the best food for your feline friend.',
    coverImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=250&fit=crop',
    author: {
      name: 'Dr. Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    publishedAt: '2024-01-12',
    readingTime: 6,
    views: 892,
    slug: 'cat-nutrition-guide'
  },
  {
    id: '4',
    title: 'Senior Dog Care: Keeping Your Aging Companion Healthy and Happy',
    excerpt: 'Learn how to adapt your care routine as your dog ages. From diet adjustments to exercise modifications and health monitoring.',
    coverImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=250&fit=crop',
    author: {
      name: 'Dr. Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
    },
    publishedAt: '2024-01-08',
    readingTime: 9,
    views: 1456,
    slug: 'senior-dog-care-guide'
  },
  {
    id: '5',
    title: 'Understanding Cat Behavior: Decoding Your Feline Friend\'s Actions',
    excerpt: 'Cats communicate through behavior. Learn to understand what your cat is trying to tell you through their actions and body language.',
    coverImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=250&fit=crop',
    author: {
      name: 'James Mitchell',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    publishedAt: '2024-01-05',
    readingTime: 5,
    views: 723,
    slug: 'understanding-cat-behavior'
  }
];

export function RelatedArticles({ currentPostId }: RelatedArticlesProps) {
  // Filter out the current post and get related articles
  const filteredArticles = relatedArticles.filter(article => article.id !== currentPostId);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-700"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
          Related Articles
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Continue exploring with these recommended reads
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${article.slug}`}>
              <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{article.readingTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <EyeIcon className="h-4 w-4" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={32}
                      height={32}
                      className="rounded-full mr-3"
                    />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/blog">
          <button className="btn-primary">
            View All Articles
          </button>
        </Link>
      </div>
    </motion.section>
  );
}
