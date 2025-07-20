import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AcademicLevel({ theme }) {
  const { t } = useTranslation();

  const academics = [
    {
      degree: t("Baccalaureate in Life and Earth Sciences"),
      institution: t("Lycée Collégial SIDI ABDELAH GHIAT"),
      period: t("2021 - 2022"),
      details: t(
        "Focused on scientific subjects with a specialization in biology and earth sciences."
      ),
    },
    {
      degree: t(
        "Specialized Technician Diploma in Digital Development (Web Full Stack Option)"
      ),
      institution: t(
        "Specialized Institute of Applied Technology – Sidi Youssef Ben Ali"
      ),
      period: t("2023 - 2024"),
      details: t(
        "Acquired skills in React.js, Laravel, REST APIs, UX/UI design, and web project management."
      ),
    },
  ];

  return (
    <section
      id="academic"
      className={`relative py-20 bg-gradient-to-b text-gray-800 ${
        theme === "light" ? "from-gray-100 to-white" : "from-gray-900 to-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className={`text-4xl font-extrabold mb-16 text-center tracking-widest uppercase ${
            theme === "light" ? "text-red-600" : "text-red-400"
          }`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t("Academic Journey")}
        </motion.h2>

        <div className="relative border-l-4 border-red-400 pl-6 space-y-10">
          {academics.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className={`absolute -left-[14px] top-1 w-7 h-7 rounded-full border-4 border-white shadow-md ${
                  theme === "light" ? "bg-red-600" : "bg-red-400"
                }`}
              ></div>
              <div
                className={`p-5 rounded-lg shadow-md ${
                  theme === "light" ? "bg-gray-50" : "bg-gray-800"
                }`}
              >
                <h3
                  className={`text-xl font-semibold ${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {item.degree}
                </h3>
                <p
                  className={`text-sm italic ${
                    theme === "light" ? "text-gray-600" : "text-white"
                  }`}
                >
                  {item.institution} | {item.period}
                </p>
                <p
                  className={`mt-2 ${
                    theme === "light" ? "text-gray-600" : "text-white"
                  }`}
                >
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 80"
          preserveAspectRatio="none"
          className="w-full h-16"
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
