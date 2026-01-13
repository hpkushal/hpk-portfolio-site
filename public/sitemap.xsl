<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>Sitemap | Kushal HP</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
            min-height: 100vh;
            color: #1f2937;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          header {
            text-align: center;
            margin-bottom: 40px;
          }
          
          .logo {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
          }
          
          h1 {
            font-size: 2.5rem;
            font-weight: 800;
            color: #1f2937;
            margin-bottom: 10px;
          }
          
          .subtitle {
            color: #6b7280;
            font-size: 1.1rem;
          }
          
          .stats {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin: 30px 0;
            flex-wrap: wrap;
          }
          
          .stat {
            text-align: center;
          }
          
          .stat-number {
            font-size: 2rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .stat-label {
            font-size: 0.875rem;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .section {
            background: white;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 24px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }
          
          .section-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid #f3f4f6;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .section-title .icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1rem;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          th {
            text-align: left;
            padding: 12px 16px;
            background: #f9fafb;
            font-weight: 600;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #6b7280;
            border-radius: 8px;
          }
          
          td {
            padding: 14px 16px;
            border-bottom: 1px solid #f3f4f6;
            font-size: 0.95rem;
          }
          
          tr:last-child td {
            border-bottom: none;
          }
          
          tr:hover td {
            background: #f9fafb;
          }
          
          a {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
          }
          
          a:hover {
            color: #764ba2;
            text-decoration: underline;
          }
          
          .priority {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
          }
          
          .priority-high {
            background: #dcfce7;
            color: #166534;
          }
          
          .priority-medium {
            background: #fef3c7;
            color: #92400e;
          }
          
          .priority-low {
            background: #f3f4f6;
            color: #6b7280;
          }
          
          .frequency {
            color: #6b7280;
            font-size: 0.875rem;
          }
          
          footer {
            text-align: center;
            padding: 40px 20px;
            color: #6b7280;
            font-size: 0.875rem;
          }
          
          footer a {
            color: #667eea;
          }
          
          @media (max-width: 768px) {
            h1 {
              font-size: 1.75rem;
            }
            
            .stats {
              gap: 20px;
            }
            
            .section {
              padding: 20px;
            }
            
            th, td {
              padding: 10px 12px;
              font-size: 0.85rem;
            }
            
            .hide-mobile {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="logo">Kushal HP</div>
            <h1>XML Sitemap</h1>
            <p class="subtitle">A complete index of all pages on this website</p>
            
            <div class="stats">
              <div class="stat">
                <div class="stat-number">
                  <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
                </div>
                <div class="stat-label">Total Pages</div>
              </div>
              <div class="stat">
                <div class="stat-number">
                  <xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/>
                </div>
                <div class="stat-label">High Priority</div>
              </div>
            </div>
          </header>

          <!-- Main Pages -->
          <div class="section">
            <h2 class="section-title">
              <span class="icon">🏠</span>
              Main Pages
            </h2>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="hide-mobile">Priority</th>
                  <th class="hide-mobile">Update Frequency</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[not(contains(sitemap:loc, '/projects/')) and not(contains(sitemap:loc, '/writings/')) and not(contains(sitemap:loc, '/tools/'))]">
                  <xsl:sort select="sitemap:priority" order="descending"/>
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="hide-mobile">
                      <xsl:choose>
                        <xsl:when test="sitemap:priority >= 0.9">
                          <span class="priority priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="sitemap:priority >= 0.7">
                          <span class="priority priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="priority priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="hide-mobile">
                      <span class="frequency"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <!-- Case Studies -->
          <div class="section">
            <h2 class="section-title">
              <span class="icon">💼</span>
              Case Studies
            </h2>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="hide-mobile">Priority</th>
                  <th class="hide-mobile">Update Frequency</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc, '/projects/')]">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="hide-mobile">
                      <span class="priority priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                    </td>
                    <td class="hide-mobile">
                      <span class="frequency"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <!-- Articles -->
          <div class="section">
            <h2 class="section-title">
              <span class="icon">📝</span>
              Articles &amp; Writings
            </h2>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="hide-mobile">Priority</th>
                  <th class="hide-mobile">Update Frequency</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc, '/writings/')]">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="hide-mobile">
                      <span class="priority priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                    </td>
                    <td class="hide-mobile">
                      <span class="frequency"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <!-- Tools -->
          <div class="section">
            <h2 class="section-title">
              <span class="icon">🛠️</span>
              AI Tools
            </h2>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="hide-mobile">Priority</th>
                  <th class="hide-mobile">Update Frequency</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc, '/tools/')]">
                  <xsl:sort select="sitemap:loc"/>
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="hide-mobile">
                      <span class="priority priority-low"><xsl:value-of select="sitemap:priority"/></span>
                    </td>
                    <td class="hide-mobile">
                      <span class="frequency"><xsl:value-of select="sitemap:changefreq"/></span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <footer>
            <p>Generated for <a href="https://www.kushalhp.com">Kushal HP</a></p>
            <p style="margin-top: 8px;">This sitemap helps search engines discover and index all pages on this website.</p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
