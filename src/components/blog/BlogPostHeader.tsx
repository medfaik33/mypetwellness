'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  EyeIcon,
  ShareIcon,
  HeartIcon,
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
  const [isLiked, setIsLiked] = useState(false);
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
    <div className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8"
        >
          {/* Category Badge */}
          {post.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
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
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isLiked
                    ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-400'
                }`}
              >
                <HeartIcon className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm">Like</span>
              </button>
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
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">By:</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {post.author.bio}
              </p>
            </div>
          </div>

          {/* Reading Stats */}
          <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-1">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
            {post.views && (
              <div className="flex items-center space-x-1">
                <EyeIcon className="h-4 w-4" />
                <span>{post.views.toLocaleString()} views</span>
              </div>
            )}
          </div>

          {/* Blog Cover Image */}
          <div className="mb-6">
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
