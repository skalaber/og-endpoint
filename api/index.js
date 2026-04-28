export default async function handler(request) {
  const url = new URL(request.url)

  // Get slug manually from path
  const slug = url.pathname.replace("/api/", "").replace("/", "")

  if (!slug) {
    return new Response("Missing slug", { status: 400 })
  }

  const r = await fetch(
    `https://cdjbwnjphimbgncbvdkj.supabase.co/functions/v1/og-event/${slug}`
  )

  const html = await r.text()

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  })
}
