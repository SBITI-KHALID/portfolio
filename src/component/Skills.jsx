import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaGitAlt, FaPython, FaPhp, FaDatabase } from "react-icons/fa";
import { SiLaravel, SiJira, SiScrumalliance } from "react-icons/si";

export default function Skills({ theme }) {
  const { t } = useTranslation();

  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400" size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" size={40} /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" size={40} /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-500" size={40} /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600" size={40} /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" size={40} /> },
    { name: "SQL", icon: <FaDatabase className="text-pink-500" size={40} /> },
    { name: "Jira", icon: <SiJira className="text-blue-600" size={40} /> },
    { name: "Scrum", icon: <SiScrumalliance className="text-green-600" size={40} /> },
  ];

  const duplicatedSkills = [...skills, ...skills];

  function useAutoScroll(reverse = false, speed = 0.5) {
    const ref = useRef(null);

    useEffect(() => {
      const container = ref.current;
      if (!container) return;
      let animationFrameId;

      function step() {
        if (!container) return;

        container.scrollLeft += reverse ? -speed : speed;

        if (!reverse && container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
        if (reverse && container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }

        animationFrameId = requestAnimationFrame(step);
      }

      animationFrameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrameId);
    }, [reverse, speed]);

    return ref;
  }

  const scrollRef1 = useAutoScroll(false, 0.4);
  const scrollRef2 = useAutoScroll(true, 0.7);
  const scrollRef3 = useAutoScroll(false, 1);

  const renderSkillsRow = (ref) => (
    <div
      ref={ref}
      className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide cursor-pointer select-none my-4"
      style={{ direction: 'ltr' }}
    >
      {duplicatedSkills.map((skill, index) => (
        <motion.div
          key={index}
          className={`inline-flex flex-col items-center p-4 rounded-lg shadow-md w-28 h-28 mx-2 justify-center ${
            theme === "light" ? "bg-white" : "bg-gray-700 text-white"
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: (index % skills.length) * 0.05 }}
        >
          {skill.icon}
          <span className="mt-2 text-sm font-semibold text-center">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className={`relative py-16 text-gray-800 px-4 ${
        theme === "light"
          ? "bg-gradient-to-b from-gray-100 to-white"
          : "bg-gradient-to-b from-gray-900 to-gray-800"
      }`}
    >
      <h2
        className={`text-4xl font-extrabold mb-12 text-center uppercase ${
          theme === "light" ? "text-red-600" : "text-red-400"
        }`}
      >
        {t('mySkills')}
      </h2>

      {renderSkillsRow(scrollRef1)}
      {renderSkillsRow(scrollRef2)}
      {renderSkillsRow(scrollRef3)}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

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
