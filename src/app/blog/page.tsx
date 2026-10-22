import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS } from '@/data/blog';
import { SITE } from '@/data/site';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Travel Blog & Gujarat Cab Guides',
  description:
    'Helpful travel guides, airport route tips, pilgrimage logistics, and highway advice for traveling across Gujarat and Mumbai with Velora Cabs.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Travel Blog & Guides | Velora Cabs',
    description:
      'Read practical travel advice, route breakdowns, and highway tips from the Velora Cabs team.',
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-velora.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Cabs Blog & Travel Guides',
      },
    ],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#EBF9FF] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <Breadcrumbs items={[{ label: 'Blog & Travel Guides' }]} />

        {/* Hero Section */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#bde9ff] shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#92EEFF]/30 border border-[#bde9ff]">
              <BookOpen className="w-4 h-4 text-[#0284c7]" />
              <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                Travel Guides & Tips
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a2a3d] tracking-tight">
              Velora Cabs Travel Blog & Route Guides
            </h1>

            <p className="text-base sm:text-lg text-[#2d6180] max-w-3xl leading-relaxed">
              Explore insightful guides on airport connections, pilgrimage itineraries, smart city business travel, and highway tips curated by our Gujarat travel desk.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#bde9ff] hover:border-[#30AFFF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EBF9FF] text-[#0284c7] border border-[#bde9ff]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#5c9ab8] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#0a2a3d] hover:text-[#0284c7] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#2d6180] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#bde9ff]/60 flex items-center justify-between text-xs">
                  <span className="text-[#5c9ab8] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-[#0284c7] hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
