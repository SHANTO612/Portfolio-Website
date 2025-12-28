import ClientAboutView from "@/components/client-view/about";
import { headers } from "next/headers";

async function extractAboutData() {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  const origin = host ? `${proto}://${host}` : "http://localhost:3000";

  const res = await fetch(`${origin}/api/about/get`, {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();
  return data?.data;
}

export default async function AboutPage() {
  const aboutData = await extractAboutData();
  return (
    <div>
      <ClientAboutView data={aboutData && aboutData.length ? aboutData[0] : {}} />
    </div>
  );
}
