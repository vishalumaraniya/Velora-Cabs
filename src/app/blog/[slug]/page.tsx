import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';
import { ROUTES } from '@/data/routes';
import { SITE } from '@/data/site';
import { Calendar, Clock, User, ArrowRight, Phone, MessageCircle } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Article Not Found | Velora Cabs' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} – Velora Cabs Blog`,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      siteName: SITE.name,
      type: 'article',
      images: [
        {
          url: '/images/og-velora.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedRoute = post.relatedRouteSlug
    ? ROUTES.find((r) => r.slug === post.relatedRouteSlug)
    : undefined;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE.url}/images/og-velora.jpg`,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/icon-512.png`,
      },
    },
    datePublished: '2026-10-15',
    dateModified: '2026-10-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <JsonLd data={articleJsonLd} />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 space-y-8">
          {/* Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] border border-[#bde9ff]">
                {post.category}
              </span>
              <span className="text-[#5c9ab8] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-[#5c9ab8]">•</span>
              <span className="text-[#5c9ab8] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="text-[#5c9ab8]">•</span>
              <span className="text-[#5c9ab8] flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] leading-relaxed border-l-4 border-[#30AFFF] pl-4 italic">
              {post.excerpt}
            </p>
          </div>

          {/* Article Body Content */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-8 text-sm sm:text-base text-[#2d6180] leading-relaxed">
            {post.content.map((section, sIdx) => (
              <section key={sIdx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-[#0a2a3d]">
                  {section.h2}
                </h2>
                {section.body.map((pText, pIdx) => (
                  <p key={pIdx}>{pText}</p>
                ))}
              </section>
            ))}

            {/* Related Route Banner if applicable */}
            {relatedRoute && (
              <div className="p-6 rounded-2xl bg-[#EBF9FF] border border-[#bde9ff] space-y-3 mt-8">
                <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider block">
                  Book This Route With Velora Cabs:
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0a2a3d]">
                      {relatedRoute.from} to {relatedRoute.to} Taxi Service
                    </h3>
                    <p className="text-xs text-[#2d6180] mt-0.5">
                      Fixed fares • Doorstep pickup • 24x7 availability
                    </p>
                  </div>
                  <Link
                    href={`/taxi/${relatedRoute.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a2a3d] hover:bg-[#123952] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
                  >
                    <span>View Route & Book</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#92EEFF]" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Back to Blog & Dispatch CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-[#0284c7] hover:underline"
            >
              ← Back to all travel guides
            </Link>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE.phoneFormatted}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a2a3d] text-white text-xs font-bold shadow-xs hover:bg-[#123952] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#92EEFF]" />
                <span>Call {SITE.phone}</span>
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#28A745] text-white text-xs font-bold shadow-xs hover:bg-[#1e8c38] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
