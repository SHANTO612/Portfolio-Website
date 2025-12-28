"use client";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientProjectView({ data }) {
  const router = useRouter();
  const headingText = "My Projects";

  return (
    <div
      className="max-w-screen-xl mt-20 mb-10 px-6 sm:px-8 mx-auto"
      id="project"
    >
      {/* HEADING */}
      <AnimationWrapper>
        <div className="flex flex-col justify-center items-center py-8">
          <h1 className="mb-4 text-3xl lg:text-4xl font-bold text-center">
            {headingText.split(" ").map((item, index) => (
              <span
                key={index}
                className={index === 1 ? "text-emerald-600" : "text-slate-900"}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>

      {/* PROJECT GRID */}
      <AnimationWrapper>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data && data.length ? (
            data.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                {/* CARD HEADER */}
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.name || "Untitled Project"}
                  </h3>

                  {item.featured && (
                    <p className="text-sm text-emerald-700 font-medium mt-1">
                      {item.featured}
                    </p>
                  )}

                  {item.createdAt && (
                    <p className="text-xs text-gray-500 mt-1">
                      {String(item.createdAt).split("T")[0]}
                    </p>
                  )}
                </div>

                {/* CARD BODY */}
                <div className="p-5 flex-1">
                  {item.description && (
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}

                  {(item?.technologies || "").trim() && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies
                        .split(",")
                        .map((t, i) => (
                          <span
                            key={t + i}
                            className="px-3 py-1 text-xs rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800"
                          >
                            {t.trim()}
                          </span>
                        ))}
                    </div>
                  )}
                </div>

                {/* CARD FOOTER */}
                <div className="p-5 border-t border-gray-100 flex flex-wrap gap-2 justify-end">
                  {item.links && item.links.length ? (
                    item.links.map((l, idx) =>
                      l.url ? (
                        <a
                          key={idx}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white transition"
                        >
                          {l.label || "Link"}
                        </a>
                      ) : null
                    )
                  ) : (
                    <>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white transition"
                        >
                          Website
                        </a>
                      )}
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm px-4 py-1.5 rounded-md bg-slate-700 hover:bg-slate-800 text-white transition"
                        >
                          GitHub
                        </a>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No projects found.
            </p>
          )}
        </div>
      </AnimationWrapper>
    </div>
  );
}

