// WordPress API service for fetching blog posts

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
    author?: Array<{
      id: number;
      name: string;
      avatar_urls: {
        '24': string;
        '48': string;
        '96': string;
      };
    }>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface WordPressTag {
  id: number;
  name: string;
  slug: string;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  slug: string;
  avatar_urls: {
    '24': string;
    '48': string;
    '96': string;
  };
}

class WordPressAPI {
  private baseUrl: string;
  private apiUrl: string;

  constructor() {
    this.baseUrl = process.env.WORDPRESS_URL || 'https://gurastech.com';
    this.apiUrl = `${this.baseUrl}/wp-json/wp/v2`;
  }

  /**
   * Fetch blog posts from WordPress
   */
  async getPosts(options: {
    per_page?: number;
    page?: number;
    categories?: number[];
    tags?: number[];
    search?: string;
    orderby?: 'date' | 'relevance' | 'id' | 'include' | 'title' | 'slug';
    order?: 'asc' | 'desc';
  } = {}): Promise<WordPressPost[]> {
    const params = new URLSearchParams({
      per_page: (options.per_page || 10).toString(),
      page: (options.page || 1).toString(),
      orderby: options.orderby || 'date',
      order: options.order || 'desc',
      _embed: 'true', // Include embedded data (featured media, author, categories, tags)
    });

    if (options.categories && options.categories.length > 0) {
      params.append('categories', options.categories.join(','));
    }

    if (options.tags && options.tags.length > 0) {
      params.append('tags', options.tags.join(','));
    }

    if (options.search) {
      params.append('search', options.search);
    }

    try {
      const response = await fetch(`${this.apiUrl}/posts?${params}`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      const posts = await response.json();
      return posts;
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      throw error;
    }
  }

  /**
   * Fetch a single post by slug
   */
  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await fetch(`${this.apiUrl}/posts?slug=${slug}&_embed=true`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      const posts = await response.json();
      return posts.length > 0 ? posts[0] : null;
    } catch (error) {
      console.error('Error fetching WordPress post:', error);
      throw error;
    }
  }

  /**
   * Fetch categories
   */
  async getCategories(): Promise<WordPressCategory[]> {
    try {
      const response = await fetch(`${this.apiUrl}/categories?per_page=100`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching WordPress categories:', error);
      throw error;
    }
  }

  /**
   * Fetch tags
   */
  async getTags(): Promise<WordPressTag[]> {
    try {
      const response = await fetch(`${this.apiUrl}/tags?per_page=100`);
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching WordPress tags:', error);
      throw error;
    }
  }

  /**
   * Transform WordPress post to our blog post format
   */
  transformPost(post: WordPressPost) {
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
    const author = post._embedded?.author?.[0];
    const categories = post._embedded?.['wp:term']?.[0] || [];
    const tags = post._embedded?.['wp:term']?.[1] || [];

    // Calculate reading time (rough estimate: 200 words per minute)
    const wordCount = post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
      id: post.id.toString(),
      title: post.title.rendered.replace(/<[^>]*>/g, ''), // Strip HTML tags
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      content: post.content.rendered,
      slug: post.slug,
      coverImage: featuredImage?.source_url || 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop',
      author: {
        name: author?.name || 'Unknown Author',
        avatar: author?.avatar_urls?.['96'] || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        bio: 'Pet care enthusiast and writer',
        socialLinks: {
          twitter: undefined,
          instagram: undefined,
          website: undefined
        }
      },
      publishedAt: post.date,
      readingTime,
      tags: tags.map(tag => tag.name),
      category: categories[0]?.name || 'General',
      views: Math.floor(Math.random() * 2000) + 500, // Mock views count
      featured: false,
      locale: 'en'
    };
  }
}

export const wordpressAPI = new WordPressAPI();
