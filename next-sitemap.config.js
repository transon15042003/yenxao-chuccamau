const siteUrl = process.env.NEXT_PUBLIC_APP_DOMAIN || 'https://chuccamau-yensao.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  additionalPaths: async (config) => {
    return [
      {
        loc: `${config.siteUrl}/products`,
        lastmod: new Date().toISOString()
      }
    ];
  }
};
