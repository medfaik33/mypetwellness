import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { StructuredData } from '@/components/StructuredData';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ 
    category?: string;
    tag?: string;
    search?: string;
    page?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const { category } = await searchParams;
  const t = await getTranslations({ locale, namespace: 'blog' });
      const baseUrl = 'https://mypetwellness.site';
  
  // Build canonical URL with category if present
  let canonicalUrl = locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`;
  if (category && category !== 'all') {
    canonicalUrl += `?category=${encodeURIComponent(category)}`;
  }

  // Build title based on category
  const baseTitle = t('title');
  const pageTitle = category && category !== 'all' 
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} - ${baseTitle}`
    : baseTitle;

  return {
    title: pageTitle,
    description: t('subtitle'),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: t('subtitle'),
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category, tag, search, page } = await searchParams;
  
  return (
    <>
      <StructuredData type="blog" />
      <div className="min-h-screen bg-black">
        <BlogGrid 
          category={category}
          tag={tag}
          search={search}
          page={page}
        />
      </div>
    </>
  );
}
