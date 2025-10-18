'use client';

import { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface BlogPostTableOfContentsProps {
  content: string;
}

export function BlogPostTableOfContents({ content }: BlogPostTableOfContentsProps) {
  const [toc, setToc] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const headings: Array<{ id: string; text: string; level: number }> = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      headings.push({ id, text, level });
    }

    setToc(headings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -35% 0%',
      }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      toc.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [toc]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-24 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
        Table of Contents
      </h3>
      <nav className="space-y-2">
        {toc.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToHeading(item.id)}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
              item.level === 1
                ? 'text-sm font-medium'
                : item.level === 2
                ? 'text-sm pl-4'
                : 'text-xs pl-8'
            } ${
              activeId === item.id
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            <div className="flex items-center">
              <ChevronRightIcon className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">{item.text}</span>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}
