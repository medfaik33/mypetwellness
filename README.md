# PawVerse - Modern Multilingual Pet Blog

A complete, modern, responsive multilingual website for a pet blog called "PawVerse" built with Next.js 15, TypeScript, Tailwind CSS, and more.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Multilingual Support**: 16 languages (English, French, Spanish, German, Arabic, Italian, Portuguese, Japanese, Chinese, Hindi, Korean, Russian, Dutch, Turkish, Polish)
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **SEO Optimized**: Complete SEO setup with sitemap, robots.txt, and meta tags
- **Blog System**: Full blog with MDX support, categories, tags, and search
- **Pet Gallery**: Upload and showcase pets with filtering and search
- **Contact System**: Contact form with email integration
- **Database Ready**: Prisma schema for PostgreSQL
- **Animations**: Smooth animations with Framer Motion
- **Performance**: Optimized images, lazy loading, and fast loading times

## 📁 Project Structure

```
petslover/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── [locale]/          # Internationalized routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── sitemap.ts         # Sitemap generation
│   │   ├── robots.ts          # Robots.txt
│   │   └── manifest.ts        # PWA manifest
│   ├── components/            # Reusable components
│   │   ├── ui/                # Basic UI components
│   │   ├── layout/            # Layout components
│   │   ├── home/              # Home page components
│   │   ├── blog/              # Blog components
│   │   ├── gallery/           # Gallery components
│   │   └── contact/           # Contact components
│   ├── lib/                   # Utility functions
│   ├── types/                 # TypeScript type definitions
│   ├── messages/              # Translation files
│   └── data/                  # Sample data and blog posts
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Dependencies
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### 1. Clone and Install

```bash
cd petslover
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/pawverse"

# Next.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Email (Nodemailer)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# API Keys
UNSPLASH_ACCESS_KEY="your-unsplash-key"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="PawVerse"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio
npm run db:studio
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🌍 Supported Languages

- 🇺🇸 English (en)
- 🇫🇷 French (fr)
- 🇪🇸 Spanish (es)
- 🇩🇪 German (de)
- 🇸🇦 Arabic (ar)
- 🇮🇹 Italian (it)
- 🇵🇹 Portuguese (pt)
- 🇯🇵 Japanese (ja)
- 🇨🇳 Chinese (zh)
- 🇮🇳 Hindi (hi)
- 🇰🇷 Korean (ko)
- 🇷🇺 Russian (ru)
- 🇳🇱 Dutch (nl)
- 🇹🇷 Turkish (tr)
- 🇵🇱 Polish (pl)

## 📱 Pages & Features

### Home Page
- Hero section with animated pet elements
- Featured articles section
- Trending topics
- Newsletter signup
- Pet adoption CTA

### Blog
- Article listing with filters and search
- Individual blog post pages with MDX support
- Table of contents
- Comments system
- Related articles
- Author information

### Pet Gallery
- Grid view of pet photos
- Upload functionality with multi-step form
- Filtering by species, location, featured status
- Like and share functionality
- Pet details and owner information

### Contact
- Contact form with validation
- Contact information
- FAQ section
- Office hours and social media links

## 🎨 Design System

### Colors
- **Primary**: Green tones for nature/pet theme
- **Secondary**: Warm yellows for highlights
- **Accent**: Soft pinks for special elements
- **Neutral**: Grays for text and backgrounds

### Typography
- **Headings**: Poppins (modern, friendly)
- **Body**: Inter (clean, readable)

### Components
- Fully accessible UI components
- Consistent spacing and sizing
- Smooth animations and transitions
- Mobile-first responsive design

## 🔧 Customization

### Adding New Languages
1. Add language code to `src/middleware.ts`
2. Create translation file in `src/messages/`
3. Add language to the language switcher component

### Adding New Blog Posts
1. Create MDX file in `src/data/blog-posts/`
2. Add frontmatter with metadata
3. Write content using Markdown/MDX syntax

### Customizing Styling
- Modify `tailwind.config.ts` for theme customization
- Update `src/app/globals.css` for global styles
- Customize component styles in individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance Features

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Lazy Loading**: Components and images load as needed
- **Code Splitting**: Automatic code splitting by Next.js
- **Caching**: Optimized caching strategies
- **SEO**: Complete SEO optimization with meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All the pet lovers who inspired this project

## 📞 Support

For support or questions:
- Email: hello@pawverse.com
- Create an issue on GitHub
- Check the FAQ section on the contact page

---

**Made with ❤️ for pet lovers everywhere**