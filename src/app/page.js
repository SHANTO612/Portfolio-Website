import Image from "next/image";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import ClientAchievementsView from "@/components/client-view/achievements";
import ClientCertificationView from "@/components/client-view/certification";
import { headers } from "next/headers";

async function extractAllDatas(currentSection) {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  const origin = host ? `${proto}://${host}` : "http://localhost:3000";

  const res = await fetch(`${origin}/api/${currentSection}/get`,{
    method: "GET",
    cache: "no-store"
  });
  const data = await res.json();
  return data && data.data;
}
export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");
  const achievementSectionData = await extractAllDatas("achievement");
  const certificationSectionData = await extractAllDatas("certification");
  return (
   <div>
    <ClientHomeView data={homeSectionData} />
      <ClientExperienceAndEducationView  educationData={educationSectionData} experienceData={experienceSectionData}  />
      <ClientProjectView data={projectSectionData} />
      <ClientAchievementsView data={achievementSectionData} />
      <ClientCertificationView data={certificationSectionData} />
   </div>
  );
}
