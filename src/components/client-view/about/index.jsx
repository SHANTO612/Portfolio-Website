'use client'

import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import about from "../../../assets/about.png";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

const itemFade = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80 },
  },
};

export default function ClientAboutView({ data }) {
  const passions = (() => {
    const v = data?.interest_and_passion;
    if (Array.isArray(v)) return v;
    if (typeof v === "string")
      return v.split("\n").map(s => s.trim()).filter(Boolean);
    return [];
  })();

  const skills =
    typeof data?.skills === "string"
      ? data.skills.split(",").map(s => s.trim()).filter(Boolean)
      : [];

  return (
    <section
      id="about"
      className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 mt-24 mb-24"
    >
      {/* ================= HERO GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-24">
        {/* IMAGE */}
        <AnimationWrapper>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white shadow-lg overflow-hidden"
          >
            <Image
              src={about}
              alt="about image"
              quality={100}
              height={520}
              width={520}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </AnimationWrapper>

        {/* JOURNEY */}
        <AnimationWrapper>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-white p-8 sm:p-10 shadow-lg"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              My Journey
            </h1>
            <p className="text-green-main font-semibold mb-6">
             This is a booring paragraph, you should skip!
            </p>

            <p className="text-black leading-relaxed space-y-4">
              My father is a private employee with a very limited income, so life
              was never easy for us. I studied in a village school where resources
              were few, but my family always tried their best to support me.
              <br /><br />
              For college, I moved to my grandparents’ house and studied at Ideal
              College, Dhanmondi. During this time, my curiosity about technology
              turned into a genuine interest in programming.
              <br /><br />
              After many ups and downs, I moved to Sylhet and got admitted to
              Shahjalal University of Science and Technology as a CSE student. I
              may not know how fast I’ll go, but I know I’ll keep moving forward.
            </p>
          </motion.div>
        </AnimationWrapper>
      </div>

      {/* ================= PASSION ================= */}
      {passions.length > 0 && (
        <AnimationWrapper>
          <motion.div
            variants={fadeUp}
            className="max-w-5xl mx-auto mb-24 rounded-2xl bg-white p-8 sm:p-10 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-black mb-10 text-center">
              Interest & Passion
            </h2>

            <motion.div
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {passions.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemFade}
                  className="h-24 flex items-center justify-center rounded-xl border border-green-main/40 bg-white text-black font-semibold text-center hover:shadow-green-main transition"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimationWrapper>
      )}

      {/* ================= SKILLS ================= */}
      <AnimationWrapper>
        <motion.div
          variants={fadeUp}
          className="rounded-2xl bg-white p-8 sm:p-10 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-black mb-10 text-center">
            Skills & Tools
          </h2>

          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={`${skill}-${idx}`}
                variants={itemFade}
                className="h-20 sm:h-24"
              >
                <div className="w-full h-full flex items-center justify-center rounded-lg border border-green-main/40 bg-white font-semibold text-black text-sm sm:text-base hover:shadow-green-main transition">
                  {skill}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </section>
  );
}
