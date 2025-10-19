// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const GA_TRACKING_ID = 'G-7QTDBGZ88E';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common tracking events for pet blog
export const trackBlogPostView = (postTitle: string) => {
  event({
    action: 'view_blog_post',
    category: 'Blog',
    label: postTitle,
  });
};

export const trackNewsletterSignup = (source: string) => {
  event({
    action: 'newsletter_signup',
    category: 'Engagement',
    label: source,
  });
};

export const trackContactFormSubmit = () => {
  event({
    action: 'contact_form_submit',
    category: 'Contact',
  });
};
