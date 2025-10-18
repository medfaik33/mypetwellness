'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  ShareIcon,
  BookmarkIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';

interface BlogPostHeaderProps {
  post: {
    title: string;
    excerpt: string;
    coverImage: string;
    author: {
      name: string;
      bio: string;
      avatar: string;
    };
    publishedAt: string;
    readingTime: number;
    tags: string[];
    views?: number;
    category?: string;
    updatedAt?: string;
  };
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="h-4 w-4" />
          <Link href="/blog" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Blog
          </Link>
          {post.category && (
            <>
              <ChevronRightIcon className="h-4 w-4" />
              <span className="text-gray-700 dark:text-gray-300">{post.category}</span>
            </>
          )}
        </nav>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 md:p-5"
        >
          {/* Category Badge */}
          {post.category && (
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <CalendarIcon className="h-4 w-4" />
                <span>Published on: {formatDate(post.publishedAt)}</span>
              </div>
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <div className="flex items-center space-x-1">
                  <ClockIcon className="h-4 w-4" />
                  <span>Updated on: {formatDate(post.updatedAt)}</span>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isBookmarked 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' 
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400'
                }`}
              >
                <BookmarkIcon className="h-4 w-4" />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <ShareIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">By:</p>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {post.author.name}
                </h3>
                <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Reading Stats */}
          <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <div className="flex items-center space-x-1">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Blog Cover Image */}
          <div className="mb-3">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
