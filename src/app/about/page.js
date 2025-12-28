import ClientAboutView from "@/components/client-view/about";
import connectToDB from "@/database";
import About from "@/models/About";

export const dynamic = "force-dynamic";

async function extractAboutData() {
  if (!process.env.MONGODB_URI) return [];
  await connectToDB();
  return About.find({}).sort({ updatedAt: -1, createdAt: -1 }).limit(1).lean();
}

export default async function AboutPage() {
  const aboutData = await extractAboutData();
  return (
    <div>
      <ClientAboutView data={aboutData && aboutData.length ? aboutData[0] : {}} />
    </div>
  );
}
