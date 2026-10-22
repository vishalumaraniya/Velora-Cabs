import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/data/site';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbListSchema} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1536px] mx-auto">
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#2d6180]">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#5c9ab8] shrink-0" aria-hidden="true" />
                )}
                {isLast || !item.href ? (
                  <span className="font-semibold text-[#0a2a3d] truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#0284c7] transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
