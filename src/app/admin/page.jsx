"use client";
import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import AdminProjectView from "@/components/admin-view/project";
import AdminAchievementsView from "@/components/admin-view/achievements";
import AdminCertificationView from "@/components/admin-view/certification";
import { addData, getData, updateData, login } from "@/services";
import { useEffect, useState } from "react";
import Login from "@/components/admin-view/login";

const initialLoginFormData = {
  username: "",
  password: "",
};
const initialHomeFormData = {
  heading: "",
  summary: "",
};

const initialAboutFormData = {
  interest_and_passion: [],
  skills: "",
};
const initialExperienceFormData = {
  title: "",
  year: "",
  affiliation: "",
  details: "",
};
const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
  cgpa: "",
};
const initialProjectFormData = {
  name: "",
  featured: "",
  website: "",
  technologies: "",
  github: "",
  links: [],
};
const initialAchievementFormData = {
  title: "",
  description: "",
  year: "",
};
const initialCertificationFormData = {
  title: "",
  issuer: "",
  year: "",
};
export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );
  const [achievementViewFormData, setAchievementViewFormData] = useState(initialAchievementFormData);
  const [certificationViewFormData, setCertificationViewFormData] = useState(initialCertificationFormData);
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const menuItem = [
    {
      id: "home",
      lable: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "about",
      lable: "About Page",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "experience",
      lable: "Research and ongoing papers",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.experience}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "education",
      lable: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.education}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "project",
      lable: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.project}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "achievement",
      lable: "Achievements",
      component: (
        <AdminAchievementsView
          formData={achievementViewFormData}
          setFormData={setAchievementViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.achievement}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "certification",
      lable: "Certification",
      component: (
        <AdminCertificationView
          formData={certificationViewFormData}
          setFormData={setCertificationViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.certification}
          setAllData={setAllData}
        />
      ),
    },
    {
      id: "contact",
      lable: "Contact",
      component: (
        <AdminContactView data={allData && allData?.contact} setAllData={setAllData} />
      ),
    },
  ];

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      experience: experienceViewFormData,
      education: educationViewFormData,
      project: projectViewFormData,
      achievement: achievementViewFormData,
      certification: certificationViewFormData,
    };
    const payload = dataMap[currentSelectedTab];
    // Normalize `details` for research projects: accept textarea string and convert to array
    const normalizedPayload = { ...payload };
    if (currentSelectedTab === 'experience' && normalizedPayload) {
      const d = normalizedPayload.details;
      if (typeof d === 'string') {
        normalizedPayload.details = d
          .split('\n')
          .map((s) => s.trim())
          .filter(Boolean);
      }
    }
    let response;
    try {
      if (normalizedPayload && normalizedPayload._id) {
        response = await updateData(currentSelectedTab, normalizedPayload);
      } else {
        response = await addData(currentSelectedTab, normalizedPayload);
      }
    } catch (err) {
      console.error('save error', err);
      response = null;
    }
    console.log(response, "response");
    if (response && response.success) {
      resetFormData();
      extractAllData();
    }
  }
  useEffect(() => {
    extractAllData();
  }, [currentSelectedTab]);
  async function extractAllData() {
    const response = await getData(currentSelectedTab);
    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }
    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }
    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }
  function resetFormData() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  async function handleLogin() {
    const res = await login(loginFormData);
    console.log(res, "login");
    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }
  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleLogin={handleLogin}
      />
    );

  return (
    <div className="border-b border-gray-400">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormData();
              setUpdate(false);
            }}
          >
            {item.lable}
          </button>
        ))}
        <button
          onClick={() => { 
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="p-4 font-bold text-xl text-black"
        >
          logout
        </button>
      </nav>
      <div className="mt-10 p-10">
        {(() => {
          const activeComponent = menuItem.find((item) => item.id === currentSelectedTab)?.component;
          return activeComponent || null;
        })()}
      </div>
    </div>
  );
}
