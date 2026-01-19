import ClientAboutView from "@/components/client-view/about";
import connectToDB from "@/database";
import About from "@/models/About";

export const dynamic = "force-dynamic";

function toPlain(value) {
  return JSON.parse(JSON.stringify(value));
}

async function extractAboutData() {
  if (!process.env.MONGODB_URI) return [];
  await connectToDB();
  const result = await About.find({}).sort({ updatedAt: -1, createdAt: -1 }).limit(1).lean();
  return toPlain(result);
}

export default async function AboutPage() {
  const aboutData = await extractAboutData();
  return (
    <div>
      <ClientAboutView data={aboutData && aboutData.length ? aboutData[0] : {}} />
    </div>
  );
}
