# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the production application
- `npm start` - Start the production server

## Project Architecture

This is a Next.js 14 portfolio and blog site using the App Router with the following structure:

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 (alpha)
- **Typography**: Geist Sans and Geist Mono fonts
- **Content**: MDX for blog posts with frontmatter parsing
- **Analytics**: Vercel Analytics and Speed Insights
- **Syntax Highlighting**: sugar-high package

### Key Directories
- `app/` - Next.js App Router pages and components
- `app/blog/posts/` - MDX blog post files with YAML frontmatter
- `app/components/` - Reusable React components
- `public/` - Static assets (images, videos)

### Content Management
Blog posts are MDX files in `app/blog/posts/` with frontmatter containing:
- `title` - Post title
- `publishedAt` - Publication date (YYYY-MM-DD format)
- `summary` - Post description

The blog system automatically:
- Parses frontmatter using custom parser in `app/blog/utils.ts`
- Sorts posts by publication date (newest first)
- Generates slugs from filenames
- Handles date formatting with relative time display

### Styling Conventions
- Custom green color scheme using `#166534` (text-green-800)
- Black text with hint of green (`#001301`) for cohesion
- Responsive design with mobile-first approach
- Max width container with centered layout

### Component Patterns
- Functional components with TypeScript
- Custom styling using Tailwind classes
- Consistent use of green accent color (`text-green-800`)
- Image and video assets served from `/public/`

### Content Structure
The main page (`app/page.tsx`) includes:
- Personal introduction and bio
- Current projects with embedded videos
- Previous work experience lists
- Contact information
- Blog post listing via BlogPosts component

### SEO and Metadata
- Dynamic OG image generation via `app/og/route.tsx`
- RSS feed generation via `app/rss/route.ts`
- Sitemap generation via `app/sitemap.ts`
- Robot.txt configuration via `app/robots.ts`
- Comprehensive metadata configuration in layout