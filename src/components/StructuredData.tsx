import { useLocale } from 'next-intl';

interface StructuredDataProps {
  type?: 'home' | 'blog' | 'article' | 'faq' | 'about' | 'contact' | 'privacy' | 'terms';
  article?: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified: string;
    image: string;
  };
}

export function StructuredData({ type = 'home', article }: StructuredDataProps) {
  const locale = useLocale();

  const getStructuredData = () => {
        const baseUrl = 'https://mypetwellness.site';
    const currentUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`;
    
    switch (type) {
      case 'home':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
              "name": "MyPetWellness",
          "url": currentUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Expert guidance on pet wellness exams, preventive care, and comprehensive pet health. Trusted veterinary advice for your pet's optimal wellness journey.",
          "foundingDate": "2024",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "availableLanguage": ["English", "Spanish", "French"]
          },
          "sameAs": [
            "https://facebook.com/pawverse",
            "https://twitter.com/pawverse",
            "https://instagram.com/pawverse"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Pet Street",
            "addressLocality": "Animal City",
            "addressRegion": "AC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pet Wellness Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pet Wellness Exams",
                  "description": "Comprehensive annual wellness examinations for pets"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Preventive Pet Care",
                  "description": "Vaccinations, parasite prevention, and health monitoring"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pet Health Consultations",
                  "description": "Expert veterinary advice and health consultations"
                }
              }
            ]
          }
        };

      case 'blog':
        return {
          "@context": "https://schema.org",
          "@type": "Blog",
              "name": "MyPetWellness Pet Wellness Blog",
          "description": "Expert articles on pet wellness exams, preventive care, and comprehensive pet health",
          "url": locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`,
          "publisher": {
            "@type": "Organization",
              "name": "MyPetWellness",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "blogPost": []
        };

      case 'article':
        if (!article) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "description": article.description,
          "image": article.image,
          "author": {
            "@type": "Person",
            "name": article.author
          },
          "publisher": {
            "@type": "Organization",
              "name": "MyPetWellness",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": article.datePublished,
          "dateModified": article.dateModified,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": locale === 'en' ? `${baseUrl}/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}` : `${baseUrl}/${locale}/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`
          },
          "keywords": "pet wellness exams, pet health, veterinary care, preventive care",
          "articleSection": "Pet Wellness",
          "wordCount": article.description.split(' ').length
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How often should my pet have a wellness exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pet wellness exams should be scheduled annually for adult pets, twice yearly for senior pets (7+ years), and more frequently for puppies and kittens. These preventive care visits help catch health issues early and ensure your pet stays healthy."
              }
            },
            {
              "@type": "Question",
              "name": "What does a comprehensive pet wellness exam include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A complete pet wellness exam includes physical examination, weight monitoring, dental check, heart and lung evaluation, blood work, parasite screening, and vaccination updates. Your veterinarian will also discuss nutrition, behavior, and preventive care recommendations."
              }
            },
            {
              "@type": "Question",
              "name": "What should I feed my pet for optimal health?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best diet depends on your pet's species, age, size, and health conditions. High-quality commercial pet foods that meet AAFCO standards are generally recommended. Consult your veterinarian for specific dietary recommendations."
              }
            },
            {
              "@type": "Question",
              "name": "How can I help my pet with separation anxiety?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gradual desensitization, creating a safe space, providing mental stimulation, and maintaining a consistent routine can help. For severe cases, consult a veterinarian or animal behaviorist for professional guidance."
              }
            }
          ]
        };

      case 'about':
        return {
          "@context": "https://schema.org",
          "@type": "AboutPage",
              "name": "About MyPetWellness",
          "description": "Learn about MyPetWellness, your trusted source for pet wellness exams, preventive care, and comprehensive pet health guidance from veterinary experts.",
          "url": `${currentUrl}/about`,
          "mainEntity": {
            "@type": "Organization",
              "name": "MyPetWellness",
            "url": currentUrl,
            "description": "Expert guidance on pet wellness exams, preventive care, and comprehensive pet health. Trusted veterinary advice for your pet's optimal wellness journey.",
            "foundingDate": "2024",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Pet Street",
              "addressLocality": "Animal City",
              "addressRegion": "AC",
              "postalCode": "12345",
              "addressCountry": "US"
            }
          }
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
              "name": "Contact MyPetWellness",
          "description": "Get in touch with MyPetWellness for pet wellness exam questions, preventive care advice, and veterinary consultations.",
          "url": `${currentUrl}/contact`,
          "mainEntity": {
            "@type": "Organization",
              "name": "MyPetWellness",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service",
              "email": "hello@mypetwellness.site"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Pet Street",
              "addressLocality": "Animal City",
              "addressRegion": "AC",
              "postalCode": "12345",
              "addressCountry": "US"
            }
          }
        };

      case 'privacy':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
              "name": "Privacy Policy - MyPetWellness",
          "description": "Learn how MyPetWellness protects your privacy and handles your personal information when you use our pet wellness resources.",
          "url": `${currentUrl}/privacy`,
          "mainEntity": {
            "@type": "Organization",
              "name": "MyPetWellness",
            "privacyPolicy": `${currentUrl}/privacy`
          }
        };

      case 'terms':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
              "name": "Terms of Service - MyPetWellness",
          "description": "Read our Terms of Service to understand the rules and guidelines for using MyPetWellness pet wellness resources.",
          "url": `${currentUrl}/terms`,
          "mainEntity": {
            "@type": "Organization",
              "name": "MyPetWellness",
            "termsOfService": `${currentUrl}/terms`
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  );
}
