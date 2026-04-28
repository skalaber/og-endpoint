export default async function handler(req, res) {
  const slug = req.query.slug;

  const r = await fetch(
    `https://cdjbwnjphimbgncbvdkj.supabase.co/functions/v1/og-event/${slug}`
  );

  const html = await r.text();

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=300");
  res.status(200).send(html);
}
