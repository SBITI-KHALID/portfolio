import React, { useEffect, useState } from "react";
import { FaStar, FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Projects({ theme }) {
  const { t } = useTranslation();

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const username = "SBITI-KHALID";

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `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`, // Add your token here
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const filtered = data.filter((repo) => !repo.fork);
          setRepos(filtered);
        } else {
          console.error("API returned non-array data:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("GitHub fetch error:", error);
        setLoading(false);
      });
  }, []);

  const displayedRepos = showAll ? repos : repos.slice(0, 3);

  return (
    <section
      id="projects"
      className={`relative py-20 bg-gradient-to-b px-6 text-gray-900 ${
        theme === "light" ? "from-gray-100 to-white" : "from-gray-900 to-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className={`text-4xl font-extrabold mb-16 text-center tracking-widest uppercase ${
            theme === "light" ? "text-red-600" : "text-red-400"
          }`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {t("myProjects")}
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <svg
              className="animate-spin h-12 w-12 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="img"
              aria-label={t("loading")}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            {/* حاوية خارجية تضيف هوامش جانبية */}
            <div className="px-4 sm:px-6 lg:px-12 w-full">
              <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {displayedRepos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className={`border border-red-200 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 w-full ${
                      theme === "light" ? "bg-white" : "bg-gray-900"
                    }`}
                    style={{ direction: "ltr", textAlign: "left" }}
                  >
                    <h3
                      className={`text-2xl font-semibold mb-3 truncate ${
                        theme === "light" ? "text-red-600" : "text-red-400"
                      }`}
                      title={repo.name}
                    >
                      {repo.name}
                    </h3>

                    <p
                      className={`text-gray-600 flex-grow mb-5 min-h-[4.5rem] ${
                        theme === "light" ? "" : "text-white"
                      }`}
                    >
                      {repo.description || t("noDescription")}
                    </p>

                    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-3 mb-6">
                      {repo.language && (
                        <span className="flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium select-none">
                          <FaCode />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-2 bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-medium select-none">
                        <FaStar />
                        {repo.stargazers_count}
                      </span>
                    </div>

                    <div className="flex space-x-5">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 hover:text-red-700 font-semibold transition ${
                          theme === "light" ? "text-red-600" : "text-red-400"
                        }`}
                      >
                        <FaGithub size={20} />
                        GitHub
                      </motion.a>

                      {repo.homepage && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold transition"
                        >
                          <FaExternalLinkAlt size={18} />
                          {t("liveDemo")}
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {repos.length > 3 && (
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(!showAll)}
                  className={`px-8 py-3 border-2 rounded-full font-semibold transition duration-300 ${
                    theme === "light"
                      ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      : "border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  }`}
                  disabled={loading}
                >
                  {showAll ? t("hideProjects") : t("showMoreProjects")}
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>
      {/* موجة سفلية */}
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
