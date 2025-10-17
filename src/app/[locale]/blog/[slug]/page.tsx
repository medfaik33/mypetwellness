import { Metadata } from 'next';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { BlogPostSidebar } from '@/components/blog/BlogPostSidebar';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { BlogComments } from '@/components/blog/BlogComments';
import { StructuredData } from '@/components/StructuredData';
import { wordpressAPI } from '@/lib/wordpress';

interface BlogPostPageProps {
  params: Promise<{ 
    locale: string;
    slug: string;
  }>;
}

// Fetch blog post from WordPress or fallback to mock data
const getBlogPost = async (slug: string) => {
  try {
    // Try to fetch from WordPress first
    const wpPost = await wordpressAPI.getPostBySlug(slug);
    if (wpPost) {
      return wordpressAPI.transformPost(wpPost);
    }
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
  }

  // Fallback to mock data if WordPress fails
  return {
    id: '1',
    title: 'The Complete Guide to Puppy Training: From Basic Commands to Advanced Techniques',
    slug: slug,
    excerpt: 'Learn the essential techniques for training your new puppy, from basic commands to housebreaking and socialization. This comprehensive guide covers everything you need to know.',
    content: `
# The Complete Guide to Puppy Training

Training your puppy is one of the most important things you can do as a pet owner. Not only does it help establish good behavior patterns, but it also strengthens the bond between you and your furry friend.

## Getting Started with Basic Commands

### Sit Command
The "sit" command is usually the first command puppies learn. Here's how to teach it:

1. Hold a treat close to your puppy's nose
2. Move your hand up, allowing their head to follow the treat
3. As their head moves up, their bottom should naturally lower
4. Once they're in a sitting position, say "sit" and give them the treat

### Stay Command
Once your puppy has mastered "sit," you can move on to "stay":

1. Ask your puppy to sit
2. Hold your hand up with your palm facing them
3. Say "stay" and take a step back
4. If they stay, return and give them a treat

## Housebreaking Your Puppy

Housebreaking is crucial for a happy home life. Here are some tips:

- **Establish a routine**: Take your puppy out at the same times every day
- **Watch for signals**: Learn to recognize when your puppy needs to go
- **Use positive reinforcement**: Reward good behavior immediately
- **Be patient**: Housebreaking takes time and consistency

## Socialization: The Key to a Well-Adjusted Dog

Socialization is about exposing your puppy to different people, animals, and environments in a positive way. The critical socialization period is between 3 and 16 weeks of age.

### What to Socialize With:
- Different types of people (children, elderly, people with hats, etc.)
- Other dogs and animals
- Various sounds and environments
- Different surfaces and textures

## Advanced Training Techniques

### Clicker Training
Clicker training is a positive reinforcement method that uses a clicking sound to mark desired behavior:

1. Charge the clicker by clicking and immediately giving a treat
2. Click when your puppy performs the desired behavior
3. Follow the click with a treat
4. Gradually phase out treats but keep the click

### Leash Training
Teaching your puppy to walk nicely on a leash is essential:

- Start indoors with no distractions
- Use treats to encourage them to stay by your side
- Gradually move to more distracting environments
- Be consistent with your expectations

## Common Training Challenges

### Puppy Biting
Puppy biting is normal but needs to be addressed:

- Redirect to appropriate chew toys
- Use time-outs if biting continues
- Never use your hands as toys
- Be consistent with corrections

### Separation Anxiety
Help your puppy learn to be alone:

- Start with short absences
- Don't make a big deal about leaving or returning
- Provide plenty of mental stimulation
- Consider crate training

## Training Schedule and Consistency

### Daily Training Sessions
- Keep sessions short (5-10 minutes)
- Train multiple times per day
- End on a positive note
- Gradually increase difficulty

### Consistency is Key
- Use the same commands
- All family members should use the same methods
- Stick to established rules
- Be patient and persistent

## When to Seek Professional Help

Consider professional training if:
- Your puppy shows signs of aggression
- Basic training isn't progressing
- You're feeling overwhelmed
- Your puppy has specific behavioral issues

## Conclusion

Training your puppy is a journey that requires patience, consistency, and lots of love. Remember that every puppy learns at their own pace, so don't get discouraged if progress seems slow. With the right approach and plenty of positive reinforcement, you'll have a well-behaved companion in no time.

The key is to make training fun for both you and your puppy. Celebrate small victories and remember that building a strong bond is just as important as teaching commands.
    `,
    coverImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=600&fit=crop',
    author: {
      name: 'Sarah Johnson',
      bio: 'Certified dog trainer with over 10 years of experience helping families build strong bonds with their pets.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      socialLinks: {
        twitter: '@sarahj_dogs',
        instagram: '@sarah_trains_dogs',
        website: 'sarahjohnson.com'
      }
    },
    publishedAt: '2024-01-15',
    readingTime: 8,
    tags: ['Training', 'Puppy', 'Dogs', 'Behavior'],
    category: 'training',
    views: 1247,
    featured: true
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getBlogPost(slug);
      const baseUrl = 'https://mypetwellness.site';
  const canonicalUrl = locale === 'en' ? `${baseUrl}/blog/${slug}` : `${baseUrl}/${locale}/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: canonicalUrl,
      publishedTime: post.publishedAt,
      images: [post.coverImage],
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  const articleData = {
    title: post.title,
    description: post.excerpt,
    author: post.author.name,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.coverImage
  };

  return (
    <>
      <StructuredData type="article" article={articleData} />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <BlogPostHeader post={post} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 md:p-4 mb-4">
                <BlogPostContent post={post} />
              </div>
              <RelatedArticles currentPostId={post.id} />
              <BlogComments postId={post.id} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogPostSidebar post={post} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
