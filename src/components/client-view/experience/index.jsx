'use client'
import { Timeline,TimelineConnector,TimelineContent, TimelineDot,TimelineItem,TimelineSeparator } from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({educationData,experienceData}){
    // console.log(educationData,experienceData,"educationData");

    return (
    <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="experience">

        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">

            <div className="flex flex-col gap-5">
        <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
        <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {"Research and ongoing papers".split(" ").map((item,index) => (
                    <span key={index} className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}> {item}{" "} </span>
                ))}
        </h1>
            </div>

        </AnimationWrapper>


    <AnimationWrapper>
    <div className="flex w-full">
    <motion.div className="container">
        <Timeline position="right">
        {experienceData && experienceData.length ? 
        experienceData.map((item, index) => (
            <TimelineItem key={item._id || index}>
                <TimelineSeparator>
                    <TimelineDot className="bg-green-main" />
                    <TimelineConnector  className="bg-green-main" />  
                </TimelineSeparator>
                <TimelineContent>
                    <div className="border-[2px] p-4 rounded-[8px] border-green-main mt-[14px] ml-[16px]">
                        <p className="font-bold text-lg">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{item.year} — {item.affiliation}</p>
                        {item.details && (Array.isArray(item.details) ? item.details : String(item.details).split('\n')).length ? (
                            <ul className="list-disc pl-6 text-gray-700 mt-3">
                                {(Array.isArray(item.details) ? item.details : String(item.details).split('\n')).map((d, i) => (
                                    d ? <li key={i}>{d}</li> : null
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </TimelineContent>
            </TimelineItem>
        )) : null }
        </Timeline>
    </motion.div>
    </div> 
    </AnimationWrapper> 
            </div> 


       {/* // Education Part Start */}

    <div className="flex flex-col gap-5">
        <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
        <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold">
            {"My Education".split(" ").map((item,index) => (
                    <span key={index} className={`${index === 1 ? "text-green-main" : "text-[#000]"}`}> {item}{" "} </span>
                ))}
        </h1>
            </div>

        </AnimationWrapper>


    <AnimationWrapper>
    <div className="flex w-full">
    <motion.div className="container">
        <Timeline position="right">
        {educationData && educationData.length ? 
        educationData.map((educationItem, index) => (
            <TimelineItem key={educationItem._id || index}>
                <TimelineSeparator>
                    <TimelineDot className="bg-green-main" />
                    <TimelineConnector  className="bg-green-main" />  
                     
                </TimelineSeparator>
                <TimelineContent>
                    <div className="border-[2px] p-4 rounded-[8px] border-green-main mt-[14px] ml-[16px]">
                <p className="font-bold">Year: { educationItem.year }</p> 
                    <p className="font-extrabold mt-2">
                    College: { educationItem.college } 
                    </p>
                    <p className="font-bold mt-2">
                    Degree: { educationItem.degree } 
                    </p>
                    {educationItem.cgpa ? (
                      <p className="font-bold mt-2">
                        CGPA: {educationItem.cgpa}
                      </p>
                    ) : null}
                    </div>
                </TimelineContent>
            </TimelineItem>
        )) : null }
        </Timeline>
    </motion.div>
    </div> 
    </AnimationWrapper> 
            </div>         

        </div> 
    </div>
    )
}
