export async function GET(request, { params }) {
  const { slug } = params;

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
