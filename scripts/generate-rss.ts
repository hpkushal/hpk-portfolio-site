import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.kushalhp.com';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const ARTICLES_DATA_PATH = path.join(PROJECT_ROOT, 'src/data/articles.ts');
const RSS_OUTPUT_PATH = path.join(PROJECT_ROOT, 'public/rss.xml');

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
        return c;
    });
}

function unescapeJsString(str: string): string {
    return str.replace(/\\'/g, "'").replace(/\\"/g, '"');
}

function generateRss() {
    console.log('Generating RSS feed...');

    if (!fs.existsSync(ARTICLES_DATA_PATH)) {
        console.error(`Articles data file not found: ${ARTICLES_DATA_PATH}`);
        return;
    }

    const content = fs.readFileSync(ARTICLES_DATA_PATH, 'utf8');

    // Find the articles array content
    const articlesMatch = content.match(/export const articles: Article\[\] = \[(.*?)\];/s);
    if (!articlesMatch) {
        console.error('Could not find articles array in articles.ts');
        return;
    }

    const articlesText = articlesMatch[1];

    // Split by article blocks
    // This matches { ... } blocks. It handles simple nesting if attributes are on new lines.
    const articleBlocks = articlesText.split(/\s*},\s*\{|\s*\[\s*\{|\}\s*\]\s*/s).filter(block => block.trim().length > 0);

    const items: string[] = [];

    for (const block of articleBlocks) {
        // Extract fields using regex that handles escaped quotes
        const idMatch = block.match(/id:\s*['"](.*?)['"]/);
        const titleMatch = block.match(/title:\s*['"](.*?)['"](?=,|$)/s);
        const excerptMatch = block.match(/excerpt:\s*['"](.*?)['"](?=,|$)/s);
        const categoryMatch = block.match(/category:\s*['"](.*?)['"]/);
        const dateMatch = block.match(/date:\s*['"](.*?)['"]/);

        if (idMatch && titleMatch && excerptMatch && dateMatch) {
            const id = idMatch[1];
            const title = unescapeJsString(titleMatch[1]);
            const excerpt = unescapeJsString(excerptMatch[1]);
            const category = categoryMatch ? categoryMatch[1] : 'Uncategorized';
            const dateStr = dateMatch[1];

            const pubDate = new Date(dateStr).toUTCString();
            const link = `${SITE_URL}/writings/${id}`;

            items.push(`
    <item>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <description>${escapeXml(excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <guid>${link}</guid>
      <category>${escapeXml(category)}</category>
    </item>`);
        }
    }

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2000/svg">
<channel>
  <title>Kushal HP - Writings</title>
  <link>${SITE_URL}/writings</link>
  <description>Insights on AI, Product Management, Business Strategy, and Technology.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  ${items.join('')}
</channel>
</rss>`;

    fs.writeFileSync(RSS_OUTPUT_PATH, rss.trim());
    console.log(`Successfully generated RSS feed with ${items.length} items at ${RSS_OUTPUT_PATH}`);
}

generateRss();
