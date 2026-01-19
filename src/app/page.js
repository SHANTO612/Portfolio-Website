import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import ClientAchievementsView from "@/components/client-view/achievements";
import ClientCertificationView from "@/components/client-view/certification";
import connectToDB from "@/database";
import Achievement from "@/models/Achievement";
import Certification from "@/models/Certification";
import Education from "@/models/Education";
import Experience from "@/models/Experience";
import HomeModel from "@/models/Home";
import Project from "@/models/Project";

export const dynamic = "force-dynamic";

function toPlain(value) {
  return JSON.parse(JSON.stringify(value));
}

async function getHomePageData() {
  if (!process.env.MONGODB_URI) {
    return {
      homeSectionData: [],
      experienceSectionData: [],
      educationSectionData: [],
      projectSectionData: [],
      achievementSectionData: [],
      certificationSectionData: [],
    };
  }

  await connectToDB();
  const [
    homeSectionData,
    experienceSectionData,
    educationSectionData,
    projectSectionData,
    achievementSectionData,
    certificationSectionData,
  ] = await Promise.all([
    HomeModel.find({}).sort({ updatedAt: -1, createdAt: -1 }).lean(),
    Experience.find({}).lean(),
    Education.find({}).lean(),
    Project.find({}).lean(),
    Achievement.find({}).lean(),
    Certification.find({}).lean(),
  ]);

  return toPlain({
    homeSectionData,
    experienceSectionData,
    educationSectionData,
    projectSectionData,
    achievementSectionData,
    certificationSectionData,
  });
}
export default async function Home() {
  const {
    homeSectionData,
    experienceSectionData,
    educationSectionData,
    projectSectionData,
    achievementSectionData,
    certificationSectionData,
  } = await getHomePageData();
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
