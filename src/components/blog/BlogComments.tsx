'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ChatBubbleLeftRightIcon, 
  HeartIcon,
  ArrowUturnLeftIcon,
  FlagIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';

interface BlogCommentsProps {
  postId?: string;
}

const mockComments = [
  {
    id: '1',
    author: {
      name: 'Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    content: 'This guide was incredibly helpful! I just got a new golden retriever puppy and these training tips are exactly what I needed. The section on housebreaking was particularly useful.',
    publishedAt: '2024-01-16',
    likes: 12,
    replies: [
      {
        id: '1-1',
        author: {
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        },
        content: 'I\'m so glad you found it helpful! Golden retrievers are such wonderful dogs. Feel free to reach out if you have any specific questions about training.',
        publishedAt: '2024-01-16',
        likes: 5
      }
    ]
  },
  {
    id: '2',
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    content: 'Great article! I\'ve been using clicker training with my border collie for a few months now and the results have been amazing. The consistency really is key.',
    publishedAt: '2024-01-15',
    likes: 8,
    replies: []
  },
  {
    id: '3',
    author: {
      name: 'Lisa Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    content: 'I wish I had read this when I first got my puppy! The socialization tips are spot on. My dog is now 2 years old and I can see the difference it made.',
    publishedAt: '2024-01-14',
    likes: 15,
    replies: []
  }
];

export function BlogComments({ }: BlogCommentsProps) {
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        author: {
          name: 'Anonymous User',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        content: newComment,
        publishedAt: new Date().toISOString().split('T')[0],
        likes: 0,
        replies: []
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleSubmitReply = (parentId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent.trim()) {
      const reply = {
        id: `${parentId}-${Date.now()}`,
        author: {
          name: 'Anonymous User',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        content: replyContent,
        publishedAt: new Date().toISOString().split('T')[0],
        likes: 0
      };
      
      setComments(comments.map(comment => 
        comment.id === parentId 
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment
      ));
      setReplyContent('');
      setReplyTo(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-700"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2 flex items-center">
          <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2 text-primary-600" />
          Comments ({comments.length})
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Share your thoughts and join the conversation
        </p>
      </div>

      {/* Comment Form */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Leave a Comment
        </h3>
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <Textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={!newComment.trim()}>
              Post Comment
            </Button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
          >
            {/* Comment Header */}
            <div className="flex items-start space-x-3 mb-4">
              <Image
                src={comment.author.avatar}
                alt={comment.author.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-neutral-900 dark:text-white">
                    {comment.author.name}
                  </h4>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(comment.publishedAt)}
                  </span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mt-1">
                  {comment.content}
                </p>
              </div>
            </div>

            {/* Comment Actions */}
            <div className="flex items-center space-x-4 text-sm">
              <button className="flex items-center space-x-1 text-neutral-500 dark:text-neutral-400 hover:text-red-500 transition-colors duration-200">
                <HeartIcon className="h-4 w-4" />
                <span>{comment.likes}</span>
              </button>
              <button 
                onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                className="flex items-center space-x-1 text-neutral-500 dark:text-neutral-400 hover:text-primary-600 transition-colors duration-200"
              >
                <ArrowUturnLeftIcon className="h-4 w-4" />
                <span>Reply</span>
              </button>
              <button className="flex items-center space-x-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200">
                <FlagIcon className="h-4 w-4" />
                <span>Report</span>
              </button>
            </div>

            {/* Reply Form */}
            {replyTo === comment.id && (
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <form onSubmit={(e) => handleSubmitReply(comment.id, e)} className="space-y-3">
                  <Textarea
                    placeholder="Write a reply..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    rows={3}
                  />
                  <div className="flex justify-end space-x-2">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => {
                        setReplyTo(null);
                        setReplyContent('');
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={!replyContent.trim()}>
                      Reply
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="mt-4 pl-8 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Image
                        src={reply.author.avatar}
                        alt={reply.author.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h5 className="font-medium text-neutral-900 dark:text-white text-sm">
                            {reply.author.name}
                          </h5>
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            {formatDate(reply.publishedAt)}
                          </span>
                        </div>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-1">
                          {reply.content}
                        </p>
                        <div className="flex items-center space-x-3 mt-2 text-xs">
                          <button className="flex items-center space-x-1 text-neutral-500 dark:text-neutral-400 hover:text-red-500 transition-colors duration-200">
                            <HeartIcon className="h-3 w-3" />
                            <span>{reply.likes}</span>
                          </button>
                          <button className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200">
                            <FlagIcon className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center py-12">
          <ChatBubbleLeftRightIcon className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
            No comments yet
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Be the first to share your thoughts on this article!
          </p>
        </div>
      )}
    </motion.section>
  );
}
