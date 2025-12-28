import ClientAboutView from "@/components/client-view/about";

async function extractAboutData() {
  const res = await fetch(`http://localhost:3000/api/about/get`, {
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

