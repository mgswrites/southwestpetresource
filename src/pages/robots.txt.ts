export const GET = () => {
  const body = `User-agent: *\nAllow: /\nSitemap: https://swpetresource.com/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
