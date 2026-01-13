import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
  noIndex?: boolean;
}

const BASE_URL = 'https://www.kushalhp.com';
const DEFAULT_IMAGE = `${BASE_URL}/New KHP LOGO.png`;
const SITE_NAME = 'Kushal HP';

// Person schema for the site owner
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kushal Horabylu Parameshwara',
  alternateName: 'Kushal HP',
  url: BASE_URL,
  image: `${BASE_URL}/images/kushal-profile.jpg`,
  jobTitle: 'Product Manager',
  worksFor: {
    '@type': 'Organization',
    name: 'ResMed',
  },
  sameAs: [
    'https://www.linkedin.com/in/kushalhp/',
    'https://twitter.com/kushalhp',
  ],
  knowsAbout: [
    'Product Management',
    'Digital Strategy',
    'AI',
    'Marketing Automation',
    'Growth Strategy',
  ],
};

// WebSite schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: 'Kushal HP Portfolio',
  url: BASE_URL,
  description: 'Product Manager with 6+ years of experience in Product Strategy, Marketing, and Delivery.',
  author: {
    '@type': 'Person',
    name: 'Kushal Horabylu Parameshwara',
  },
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  article,
  noIndex = false,
}) => {
  const fullTitle = title === 'Home' ? `${SITE_NAME} - Product Manager & Digital Strategist` : `${title} | ${SITE_NAME}`;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  // Generate Article schema for article pages
  const articleSchema = type === 'article' && article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: fullImage,
    url: fullUrl,
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.author || 'Kushal Horabylu Parameshwara',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Kushal HP',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/New KHP LOGO.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    keywords: article.tags?.join(', '),
  } : null;

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
      ...(url && url !== '/' ? [{
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: fullUrl,
      }] : []),
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article specific meta tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* JSON-LD Structured Data */}
      {/* WebSite Schema - on homepage */}
      {title === 'Home' && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}

      {/* Person Schema - on homepage and about page */}
      {(title === 'Home' || title === 'About Me') && (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      )}

      {/* Article Schema - on article pages */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Breadcrumb Schema - on all pages except home */}
      {url && url !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
