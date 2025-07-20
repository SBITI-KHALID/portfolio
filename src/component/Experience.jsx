import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import experiencesData from "./experienceData";

export default function Experience({ theme }) {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = experiencesData[i18n.language] || experiencesData.en;

  const toggleCertificate = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className={`relative py-20 bg-gradient-to-b px-6 text-gray-900 ${
        theme === "light" ? "from-gray-100 to-white" : "from-gray-900 to-gray-800"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className={`text-4xl font-extrabold mb-16 text-center tracking-widest uppercase ${
            theme === "light" ? "text-red-600" : "text-red-400"
          }`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("experience")}
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`rounded-2xl shadow-xl border border-red-200 p-8 hover:shadow-2xl transition-shadow duration-400 ${
                  theme === "light" ? "bg-white" : "bg-gray-900"
                }`}
              >
                <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3
                    className={`text-2xl font-bold ${
                      theme === "light" ? "text-red-600" : "text-red-400"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className={`text-sm italic mt-2 sm:mt-0 ${
                      theme === "light" ? "text-gray-500" : "text-white"
                    }`}
                  >
                    {exp.company} &bull; {exp.period}
                  </p>
                </header>

                <p
                  className={`leading-relaxed ${
                    theme === "light" ? "text-gray-700" : "text-white"
                  }`}
                >
                  {exp.description}
                </p>

                <button
                  onClick={() => toggleCertificate(index)}
                  className={`mt-6 px-6 py-3 rounded-full font-semibold transition ${
                    isActive
                      ? "bg-red-500 hover:bg-red-700 text-white"
                      : "hover:bg-red-300 text-red-800"
                  } ${theme === "light" ? "bg-red-200" : "text-white bg-red-400"}`}
                >
                  {isActive ? t("hideCertificate") : t("showCertificate")}
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`p-4 rounded-lg shadow-inner mt-6 flex flex-col items-center ${
                          theme === "light" ? "bg-red-50" : "bg-gray-800"
                        }`}
                      >
                        <img
                          src={exp.certificate}
                          alt={`Certificate of ${exp.title}`}
                          className="shadow-md w-full max-w-xl object-contain m-1"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* هنا الـ SVG الخلفي كما طلبت */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="w-full h-16"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            d="M0,30 C150,80 350,0 500,30 L500,80 L0,80 Z"
            fill={theme === "light" ? "#f3f4f6" : "#111827"}
          ></path>
        </svg>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}
