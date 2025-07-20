import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function About({ theme }) {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className={`relative bg-gradient-to-b py-16 text-gray-800 px-4 ${
        theme === "light" ? "from-gray-100 to-white" : "from-gray-900 to-gray-800"
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-red-400 shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/bbb.jpg`}
            alt={t('aboutImageAlt')}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-4xl font-extrabold mb-16 text-center tracking-widest uppercase ${
              theme === "light" ? "text-red-600" : "text-red-400"
            }`}
          >
            {t('aboutTitle')}
          </h2>
          <p className={`text-lg leading-relaxed ${theme === "light" ? "" : "text-white"}`}>
            {t('aboutParagraph1', { name: t('khalid') })}
          </p>
          <p className={`mt-4 text-lg leading-relaxed ${theme === "light" ? "" : "text-white"}`}>
            {t('aboutParagraph2')}
          </p>
        </motion.div>
      </div>

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
