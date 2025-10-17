'use client';

import { motion } from 'framer-motion';
import { BlogPostTableOfContents } from './BlogPostTableOfContents';


interface BlogPostContentProps {
  post: {
    content: string;
  };
}

// Mock MDX components - in real app, you'd import these
/*
const components = {
  h1: ({ children, ...props }: ComponentProps) => (
    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentProps) => (
    <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mt-6 mb-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps) => (
    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mt-4 mb-2" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ComponentProps) => (
    <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentProps) => (
    <ul className="list-disc list-inside mb-4 text-neutral-700 dark:text-neutral-300 space-y-1" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentProps) => (
    <ol className="list-decimal list-inside mb-4 text-neutral-700 dark:text-neutral-300 space-y-1" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentProps) => (
    <li className="text-neutral-700 dark:text-neutral-300" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: ComponentProps) => (
    <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600 dark:text-neutral-400 my-6" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: ComponentProps) => (
    <code className="bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: ComponentProps) => (
    <pre className="bg-neutral-900 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto my-6" {...props}>
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }: ComponentProps & { src?: string; alt?: string }) => (
    <img
      src={src}
      alt={alt}
      className="rounded-lg shadow-md my-6 w-full"
      {...props}
    />
  ),
};
*/

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3"
      >
        <article className="prose prose-lg max-w-none">
          {/* For now, we'll render the content as HTML since we're using mock data */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-headings:dark:text-white prose-p:text-neutral-700 prose-p:dark:text-neutral-300 prose-li:text-neutral-700 prose-li:dark:text-neutral-300 prose-strong:text-neutral-900 prose-strong:dark:text-white prose-a:text-primary-600 prose-a:dark:text-primary-400 hover:prose-a:text-primary-700 hover:prose-a:dark:text-primary-300"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Training', 'Puppy', 'Dogs', 'Behavior'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            Share this article
          </h3>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              <span>Twitter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-neutral-600 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-200">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm6.568 17.5c-.223 1.394-1.386 2.5-2.818 2.5H8.25c-1.432 0-2.595-1.106-2.818-2.5L4.5 6.5h15l-1.432 11z"/>
              </svg>
              <span>Copy Link</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Table of Contents Sidebar */}
      <div className="lg:col-span-1">
        <BlogPostTableOfContents content={post.content} />
      </div>
    </div>
  );
}
