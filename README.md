# MyPetWellness 🐕🐱

A modern, responsive pet wellness blog and community platform built with Next.js 15, featuring internationalization, WordPress integration, and beautiful UI design.

## ✨ Features

### 🎨 **Modern Design**
- Clean, responsive UI with Tailwind CSS
- Dark/Light mode support
- Mobile-first design approach
- Beautiful animations with Framer Motion

### 🌍 **Internationalization**
- Multi-language support (English, Spanish, French, German)
- Dynamic routing for different locales
- Translated content and UI elements

### 📝 **Blog & Content**
- WordPress API integration for blog posts
- Dynamic blog post rendering
- Category filtering and search
- Related articles suggestions
- Table of contents for long posts

### 🏥 **Pet Wellness Focus**
- Expert veterinarian profiles
- Pet care guides and tips
- Adoption and community features
- Contact forms and FAQ sections

### 🚀 **Performance**
- Next.js 15 with App Router
- Optimized images and fonts
- SEO-friendly with structured data
- PWA support with manifest

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Internationalization**: next-intl
- **Database**: Prisma (ready for expansion)
- **CMS Integration**: WordPress REST API
- **TypeScript**: Full type safety

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   ├── contact/       # Contact page
│   │   └── ...
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── blog/             # Blog-specific components
│   ├── contact/          # Contact page components
│   ├── home/             # Homepage components
│   ├── layout/           # Layout components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── messages/             # Translation files
├── types/                # TypeScript type definitions
└── data/                 # Static data and content
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd petslover
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   WORDPRESS_API_URL=https://gurastech.com/wp-json/wp/v2
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
   
   **Note**: This project is already configured to work with the WordPress site at `gurastech.com`. The API is tested and working with blog posts about pet care and dog breeds.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables:
   - `WORDPRESS_API_URL` = `https://gurastech.com/wp-json/wp/v2`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-deployed-site.vercel.app`
4. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## 🎯 Key Features Explained

### Contact Page
- Modern, responsive contact form
- Multiple contact methods (email, phone, location)
- Office hours display
- FAQ section integration

### Blog System
- WordPress API integration
- Dynamic post rendering
- Category filtering
- Search functionality
- Related articles

### Internationalization
- Support for multiple languages
- Dynamic locale routing
- Translated UI elements
- SEO-friendly URLs

## 🎨 Customization

### Branding
- Update logo in `src/components/ui/Logo.tsx`
- Modify colors in `tailwind.config.ts`
- Change site metadata in `src/app/layout.tsx`

### Content
- Add new blog posts via WordPress
- Update homepage content in components
- Modify contact information

### Styling
- Customize Tailwind classes
- Add new components in `src/components/ui/`
- Update global styles in `src/app/globals.css`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- WordPress for the robust CMS API
- All contributors and the open-source community

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us through the website
- Check the documentation

---

**Made with ❤️ for pet lovers everywhere** 🐾