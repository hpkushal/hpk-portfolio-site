import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.kushalhp.com';
const PROJECT_ROOT = path.resolve(__dirname, '..');

const DATA_FILES = {
  articles: path.join(PROJECT_ROOT, 'src/data/articles.ts'),
  projects: path.join(PROJECT_ROOT, 'src/data/projects.ts'),
  tools: path.join(PROJECT_ROOT, 'src/data/tools.tsx'),
};

const SITEMAP_PATH = path.join(PROJECT_ROOT, 'public/sitemap.xml');
const PACKAGE_JSON_PATH = path.join(PROJECT_ROOT, 'package.json');

function extractIds(filePath: string, key: string): string[] {
  const content = fs.readFileSync(filePath, 'utf8');
  const ids: string[] = [];
  const regex = new RegExp(`${key}:\\s*['"]([^'"]+)['"]`, 'g');
  let match;
  while ((match = regex.exec(content)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

function extractProjectUrls(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf8');
  const urls: string[] = [];
  const regex = /caseStudyUrl:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function extractToolRoutes(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf8');
  const routes: string[] = [];
  const regex = /route:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    routes.push(match[1]);
  }
  return routes;
}

function generateSitemap(articles: string[], projectUrls: string[], toolRoutes: string[]) {
  const now = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/resume</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/tools</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/resources</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${SITE_URL}/writings</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Case Studies / Projects -->
`;

  projectUrls.forEach(url => {
    const cleanUrl = url.replace(/\/$/, '');
    xml += `  <url>
    <loc>${SITE_URL}${cleanUrl}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  xml += `\n  <!-- Writings / Articles -->\n`;
  articles.forEach(id => {
    xml += `  <url>
    <loc>${SITE_URL}/writings/${id}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  xml += `\n  <!-- AI Tools -->\n`;
  toolRoutes.forEach(route => {
    const cleanRoute = route.replace(/\/$/, '');
    xml += `  <url>
    <loc>${SITE_URL}${cleanRoute}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  });

  xml += `</urlset>`;

  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log(`Updated ${SITEMAP_PATH}`);
}

function updatePackageJson(articles: string[], projectUrls: string[], toolRoutes: string[]) {
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));

  const mainRoutes = [
    '/',
    '/about',
    '/resume',
    '/projects',
    '/tools',
    '/resources',
    '/writings'
  ];

  const writingRoutes = articles.map(id => `/writings/${id}`);

  // Combine all routes
  const allRoutes = [
    ...mainRoutes,
    ...projectUrls,
    ...toolRoutes,
    ...writingRoutes
  ];

  // Remove duplicates and sort
  pkg.reactSnap.include = Array.from(new Set(allRoutes)).sort();

  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2) + '\n');
  console.log(`Updated ${PACKAGE_JSON_PATH}`);
}

function main() {
  console.log('Syncing sitemap and package.json...');

  const articlesList = extractIds(DATA_FILES.articles, 'id');
  const projectUrls = extractProjectUrls(DATA_FILES.projects);
  const toolRoutes = extractToolRoutes(DATA_FILES.tools);

  console.log(`Found ${articlesList.length} articles`);
  console.log(`Found ${projectUrls.length} projects`);
  console.log(`Found ${toolRoutes.length} tools`);

  generateSitemap(articlesList, projectUrls, toolRoutes);
  updatePackageJson(articlesList, projectUrls, toolRoutes);

  console.log('Sync complete!');
}

main();
