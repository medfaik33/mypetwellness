'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  ShareIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';
import { formatDate } from '@/lib/utils';

interface BlogPostSidebarProps {
  post: {
    author: {
      name: string;
      bio: string;
      avatar: string;
      socialLinks: {
        twitter?: string;
        instagram?: string;
        website?: string;
      };
    };
    publishedAt: string;
    readingTime: number;
    views: number;
  };
}

const relatedPosts = [
  {
    id: '2',
    title: 'Cat Nutrition: What Every Owner Should Know',
    coverImage: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300&h=200&fit=crop',
    slug: 'cat-nutrition-guide',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'Creating the Perfect Home Environment for Your Bird',
    coverImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop',
    slug: 'perfect-bird-home-environment',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Senior Dog Care: Keeping Your Aging Companion Healthy',
    coverImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop',
    slug: 'senior-dog-care-guide',
    readTime: '9 min read'
  }
];

export function BlogPostSidebar({ post }: BlogPostSidebarProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this article',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="space-y-6">
      {/* Author Card */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
        <div className="text-center">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={80}
            height={80}
            className="rounded-full mx-auto mb-4"
          />
          <div className="flex items-center justify-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {post.author.name}
            </h3>
            <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
            {post.author.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-3">
            {post.author.socialLinks?.twitter && (
              <a
                href={`https://twitter.com/${post.author.socialLinks.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            )}
            {post.author.socialLinks?.instagram && (
              <a
                href={`https://instagram.com/${post.author.socialLinks.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 rounded-lg hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Article Stats */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Article Stats
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-neutral-500" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Published</span>
            </div>
            <span className="text-sm font-medium text-neutral-900 dark:text-white">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-4 w-4 text-neutral-500" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Reading Time</span>
            </div>
            <span className="text-sm font-medium text-neutral-900 dark:text-white">
              {post.readingTime} min
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Actions
        </h3>
        <div className="space-y-3">
          
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
              isBookmarked
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400'
            }`}
          >
            <BookmarkIcon className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="font-medium">
              {isBookmarked ? 'Bookmarked' : 'Bookmark'}
            </span>
          </button>
          
          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-all duration-200"
          >
            <ShareIcon className="h-4 w-4" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Related Articles
        </h3>
        <div className="space-y-4">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.id}
              href={`/blog/${relatedPost.slug}`}
              className="block group"
            >
              <div className="flex space-x-3">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    {relatedPost.readTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
