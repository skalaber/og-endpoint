export default async function handler(request) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  const r = await fetch(
    `https://cdjbwnjphimbgncbvdkj.supabase.co/functions/v1/og-event/${slug}`
  );

  const html = await r.text();

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
