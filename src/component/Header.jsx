import React, { useEffect, useState, useMemo } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import '../i18n';

export default function Header({ theme }) {
  const { t, i18n } = useTranslation();

  const titles = useMemo(() => [
    t('fullStackDeveloper'),
    t('frontendDeveloper'),
    t('backendDeveloper')
  ], [t, i18n.language]);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const current = titles[index];

    if (typing) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, 50);
      } else {
        setTyping(true);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, index, titles]);

  return (
    <header
      id="home"
      className={`h-screen min-h-[500px] flex justify-center items-center bg-gradient-to-b py-7 text-gray-900 ${
        theme === "light" ? "from-gray-100 to-white" : "from-gray-900 to-gray-800"
      }`}
    >
      <div className="w-[70vw]  flex flex-col sm:flex-row justify-between items-center">
        <motion.div
          className="relative order-1 sm:order-2 mb-6 sm:mb-0 py-3"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/bbb.jpg`}
          alt={t('profileImageAlt')}
          className="w-full h-full object-cover"
        />
          </div>
        </motion.div>

        <motion.div
          className="order-2 sm:order-1 text-center flex-col flex items-center sm:items-start sm:text-left sm:mr-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        >
          <h1 className={`text-5xl font-extrabold mb-2 ${theme === "light" ? "text-red-600" : "text-red-400"}`}>
            {t('hi')}
            <span className={`mx-2 font-normal text-xl sm:text-2xl ${theme === "light" ? "text-black" : "text-white"}`}>
              {t('myNameIs')}
            </span>
          </h1>
          <p className={`text-4xl mb-2 ${theme === "light" ? "text-red-600" : "text-red-400"}`}>
            {t('khalid')}
          </p>
          <p className={`text-lg sm:text-xl font-mono  whitespace-nowrap overflow-hidden ${theme === "light" ? "text-gray-700" : "text-white"}`}>
            {t('imA')} {text}<span className={`${theme === 'light'?"text-red-600":"text-red-400"} font-extrabold`} >|</span>
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center mt-3">
            <a
                href={`${process.env.PUBLIC_URL}/CV.pdf`}
              download
              className={`px-8 py-3 border-2 rounded-full font-semibold transition duration-300 ${
                theme === "light"
                  ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  : "border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
              }`}
            >
              {t('downloadCV')}
            </a>

            <div className={`flex ${i18n.language === 'ar' ? 'mr-4' : ''} space-x-6 items-center mt-4 md:mt-0 md:ml-7`}>
              <a
                href="https://www.linkedin.com/in/sbiti-khalid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 rounded hover:text-red-500 text-3xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SBITI-KHALID"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === "light" ? "text-gray-900" : "text-white"} hover:text-red-500 text-3xl ${i18n.language === 'ar' ? 'pr-3' : ''}`}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </header>
  );
}
