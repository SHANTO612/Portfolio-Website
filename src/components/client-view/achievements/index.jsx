"use client";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

function variants(){
    return {
        offscreen: { y: 150, opacity: 0 },
        onscreen: ({ duration = 2 } = {}) => ({ y:0, opacity:1, transition: { type: "spring", duration } })
    }
}

export default function ClientAchievementsView({ data }) {
  const setVariants = variants();
  const headingText = "My Achievements";
  return (
    <div className="max-w-screen-xl mt-24 mb-6 px-6 sm:px-8 lg:px-16 mx-auto" id="achievements">
      <AnimationWrapper>
        <div className="flex flex-col justify-center items-center py-6">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {headingText.split(" ").map((item, index) => (
              <span key={index} className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}> {item} </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>

      <AnimationWrapper>
        <motion.div className="flex flex-col gap-6">
          {data && data.length ? (
            data.map((item) => (
              <motion.div key={item._id} className="border-[2px] p-4 rounded-[8px] border-green-main" variants={setVariants}>
                <p className="font-bold">{item.title} <span className="text-sm text-gray-600">• {item.year}</span></p>
                <p className="mt-2">{item.description}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600">No achievements yet.</p>
          )}
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
