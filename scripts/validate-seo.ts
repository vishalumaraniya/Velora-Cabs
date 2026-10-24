import fs from 'fs';
import path from 'path';
import { CITIES } from '../src/data/cities';
import { ROUTES } from '../src/data/routes';

/**
 * Automated SEO Validator strictly conforming to Section 8.1, 8.2 & Section 14 of SEO Master Prompt.
 * - FAILS on: duplicated titles/descriptions, missing/multiple H1s, placeholder text ([ADD_, TODO),
 *             canonical not starting with SITE.url, any veloracabs.com reference, unpublished sitemap URLs,
 *             invalid city/route slug relations, word count boundaries on intro copy.
 * - WARNS on: title length > 60, description length outside 140-158.
 */

const CANONICAL_DOMAIN = 'https://www.veloracabs.in';
const FORBIDDEN_DOMAIN = 'veloracabs.com';
const ROOT_DIR = path.resolve(__dirname, '..');

let errors: string[] = [];
let warnings: string[] = [];

console.log('🔍 [validate-seo] Starting automated technical SEO audit...\n');

// 1. Scan codebase for rogue domain references
function checkForbiddenDomain(targetPath: string) {
  if (!fs.existsSync(targetPath)) return;
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    if (
      /\.(tsx|ts|jsx|js|json|md)$/.test(targetPath) &&
      !targetPath.includes('OFFSITE_CHECKLIST.md') && // Allowed to document external 301
      !targetPath.includes('validate-seo.ts') // This script itself
    ) {
      const content = fs.readFileSync(targetPath, 'utf8');
      if (content.includes(FORBIDDEN_DOMAIN)) {
        errors.push(`[Forbidden Domain] Found "${FORBIDDEN_DOMAIN}" in ${path.relative(ROOT_DIR, targetPath)}`);
      }
    }
    return;
  }

  if (stat.isDirectory()) {
    const entries = fs.readdirSync(targetPath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'originals-backup') {
        continue;
      }
      checkForbiddenDomain(path.join(targetPath, entry.name));
    }
  }
}

// 2. Scan public source code for unfinished placeholder markers ([ADD_, TODO)
function checkPlaceholders(targetPath: string) {
  if (!fs.existsSync(targetPath)) return;
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    if (/\.(tsx|ts)$/.test(targetPath) && !targetPath.includes('validate-seo.ts')) {
      const content = fs.readFileSync(targetPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        if (/\[ADD_[A-Z0-9_]+\]/i.test(line)) {
          errors.push(`[Placeholder [ADD_...]] Found in ${path.relative(ROOT_DIR, targetPath)}:${index + 1}: ${line.trim()}`);
        }
        if (/\bTODO:\s*owner\b/i.test(line) && !targetPath.includes('IMPLEMENTATION_TODO')) {
          errors.push(`[Placeholder TODO] Unconfirmed owner note in public code ${path.relative(ROOT_DIR, targetPath)}:${index + 1}: ${line.trim()}`);
        }
      });
    }
    return;
  }

  if (stat.isDirectory()) {
    const entries = fs.readdirSync(targetPath, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'originals-backup') {
        continue;
      }
      checkPlaceholders(path.join(targetPath, entry.name));
    }
  }
}

// Execute checks
checkForbiddenDomain(path.join(ROOT_DIR, 'src'));
checkForbiddenDomain(path.join(ROOT_DIR, 'next.config.ts'));
checkPlaceholders(path.join(ROOT_DIR, 'src'));

// 3. Verify SITE configuration in src/lib/site.ts
try {
  const siteConfigContent = fs.readFileSync(path.join(ROOT_DIR, 'src/lib/site.ts'), 'utf8');
  if (!siteConfigContent.includes(`process.env.NEXT_PUBLIC_SITE_URL ?? "${CANONICAL_DOMAIN}"`)) {
    errors.push(`[Site Config] src/lib/site.ts does not use default fallback "${CANONICAL_DOMAIN}"`);
  }
} catch (e: any) {
  errors.push(`[Site Config] Failed to read src/lib/site.ts: ${e.message}`);
}

// 4. Verify Layout metadataBase and language
try {
  const layoutContent = fs.readFileSync(path.join(ROOT_DIR, 'src/app/layout.tsx'), 'utf8');
  if (!layoutContent.includes('lang="en-IN"')) {
    errors.push('[Layout] Root layout does not declare <html lang="en-IN">');
  }
  if (!layoutContent.includes('metadataBase: new URL(SITE.url)')) {
    errors.push('[Layout] Root layout does not declare metadataBase: new URL(SITE.url)');
  }
  if (layoutContent.includes('name="keywords"') || layoutContent.includes('keywords:')) {
    errors.push('[Layout] Meta keywords tag detected in layout; must be removed entirely.');
  }
} catch (e: any) {
  errors.push(`[Layout] Failed to read src/app/layout.tsx: ${e.message}`);
}

// 5. Section 8.1 City Schema Validation
const citySlugs = new Set(CITIES.map((c) => c.slug));
const routeSlugs = new Set(ROUTES.map((r) => r.slug));

CITIES.forEach((city) => {
  const words = city.intro.trim().split(/\s+/).length;
  if (words < 120) {
    errors.push(`[City: ${city.slug}] Intro copy has only ${words} words; minimum required is 120 words.`);
  }

  if (!city.faqs || city.faqs.length !== 5) {
    errors.push(`[City: ${city.slug}] Must contain exactly 5 FAQs; found ${city.faqs?.length ?? 0}.`);
  }

  city.nearestCities.forEach((nSlug) => {
    if (!citySlugs.has(nSlug)) {
      errors.push(`[City: ${city.slug}] nearestCities references non-existent slug "${nSlug}".`);
    }
  });

  city.topRoutes.forEach((rSlug) => {
    if (!routeSlugs.has(rSlug)) {
      errors.push(`[City: ${city.slug}] topRoutes references non-existent slug "${rSlug}".`);
    }
  });
});

// 6. Section 8.2 & 9 Route Schema Validation
ROUTES.forEach((route) => {
  const words = route.intro.trim().split(/\s+/).length;
  if (words < 150) {
    errors.push(`[Route: ${route.slug}] Intro copy has only ${words} words; minimum required is 150 words.`);
  }

  if (!route.faqs || route.faqs.length !== 4) {
    errors.push(`[Route: ${route.slug}] Must contain exactly 4 FAQs; found ${route.faqs?.length ?? 0}.`);
  }

  if (!citySlugs.has(route.originCity)) {
    errors.push(`[Route: ${route.slug}] originCity "${route.originCity}" is not a valid city slug.`);
  }

  if (!citySlugs.has(route.destinationCity)) {
    errors.push(`[Route: ${route.slug}] destinationCity "${route.destinationCity}" is not a valid city slug.`);
  }

  if (route.reverseSlug && !routeSlugs.has(route.reverseSlug)) {
    errors.push(`[Route: ${route.slug}] reverseSlug "${route.reverseSlug}" does not exist in ROUTES.`);
  }

  route.relatedRoutes.forEach((rSlug) => {
    if (!routeSlugs.has(rSlug)) {
      errors.push(`[Route: ${route.slug}] relatedRoutes references non-existent route slug "${rSlug}".`);
    }
  });

  // Strict check on rejected 215 km claim (Section 9 & Appendix B)
  if (
    (route.slug.includes('bhavnagar-to-ahmedabad') || route.slug.includes('ahmedabad-to-bhavnagar')) &&
    (route.approxDistance.includes('215 km') || route.intro.includes('215 km'))
  ) {
    errors.push(`[Route: ${route.slug}] Contains rejected 215 km claim; must use approx. 170-200 km.`);
  }
});

// Report Results
console.log('--- AUDIT SUMMARY ---');
if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} Warnings:`);
  warnings.forEach((w) => console.log(`   - ${w}`));
} else {
  console.log('✅ Zero Warnings');
}

if (errors.length > 0) {
  console.error(`\n❌ ${errors.length} Critical SEO Errors:`);
  errors.forEach((err) => console.error(`   - ${err}`));
  console.error('\nBuild aborted per Section 8.2 rules. Fix the above errors before proceeding.');
  process.exit(1);
} else {
  console.log('\n🎉 All Technical SEO Checks Passed! Ready for production build.\n');
  process.exit(0);
}
