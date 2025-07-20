import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact({ theme }) {
  const { t, i18n } = useTranslation();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const validateForm = (formData) => {
    const newErrors = { user_name: "", user_email: "", message: "" };
    let valid = true;

    if (!formData.get("user_name")?.trim()) {
      newErrors.user_name = t("enterName");
      valid = false;
    }
    if (!formData.get("user_email")?.trim()) {
      newErrors.user_email = t("enterEmail");
      valid = false;
    } else if (!validateEmail(formData.get("user_email"))) {
      newErrors.user_email = t("validEmail");
      valid = false;
    }
    if (!formData.get("message")?.trim()) {
      newErrors.message = t("enterMessage");
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) {
      setTimeout(() => setErrors({ user_name: "", user_email: "", message: "" }), 3000);
    }
    return valid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("");
    setShowToast(false);

    const formData = new FormData(formRef.current);
    if (!validateForm(formData)) return;

    setLoading(true);
    emailjs.sendForm("service_dn2z638", "template_mg1osew", formRef.current, "rfQmFjiEdaCV1khUe")
      .then(() => {
        setStatusMessage(t("sentSuccess"));
        setShowToast(true);
        setLoading(false);
        e.target.reset();
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        setStatusMessage(t("sentError"));
        setShowToast(true);
        setLoading(false);
        setTimeout(() => setShowToast(false), 3000);
      });
  };

  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const alignIcon = i18n.language === "ar" ? "right-4" : "left-4";

  return (
    <>
      <section id="contact" className={`relative py-20 bg-gradient-to-b px-6 text-gray-900 ${theme === "light" ? "from-gray-100 to-white" : "from-gray-900 to-gray-800"}`}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className={`text-4xl font-extrabold mb-16 text-center tracking-widest uppercase select-none ${theme === "light" ? "text-red-600" : "text-red-400"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            {t("contactMe")}
          </motion.h2>

          <form ref={formRef} className="space-y-8" onSubmit={sendEmail} noValidate>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative flex-1">
                <FaUser className={`absolute ${alignIcon} top-6 -translate-y-1/2 text-red-500`} />
                <input
                  type="text"
                  name="user_name"
                  placeholder={t("yourName")}
                  className={`w-full ${direction === "rtl" ? "text-right pr-12 pl-4" : "pl-12 pr-4"} py-3 border rounded-lg ${theme === "light" ? "bg-white text-gray-900 border-red-500" : "bg-gray-800 text-white border-red-300"} focus:outline-none focus:ring-2 focus:ring-red-400`}
                  style={{ direction }}
                  disabled={loading}
                />
                {errors.user_name && <p className="text-red-600 mt-1 text-sm">{errors.user_name}</p>}
              </div>

              <div className="relative flex-1">
                <FaEnvelope className={`absolute ${alignIcon} top-6 -translate-y-1/2 text-red-500`} />
                <input
                  type="email"
                  name="user_email"
                  placeholder={t("yourEmail")}
                  className={`w-full ${direction === "rtl" ? "text-right pr-12 pl-4" : "pl-12 pr-4"} py-3 border rounded-lg ${theme === "light" ? "bg-white text-gray-900 border-red-500" : "bg-gray-800 text-white border-red-300"} focus:outline-none focus:ring-2 focus:ring-red-400`}
                  style={{ direction }}
                  disabled={loading}
                />
                {errors.user_email && <p className="text-red-600 mt-1 text-sm">{errors.user_email}</p>}
              </div>
            </div>

            <div className="relative">
              <FaCommentDots className={`absolute ${alignIcon} top-6 -translate-y-1/2 text-red-500`} />
              <textarea
                name="message"
                rows="5"
                placeholder={t("yourMessage")}
                className={`w-full ${direction === "rtl" ? "text-right pr-12 pl-4" : "pl-12 pr-4"} py-3 border rounded-lg resize-none ${theme === "light" ? "bg-white text-gray-900 border-red-500" : "bg-gray-800 text-white border-red-300"} focus:outline-none focus:ring-2 focus:ring-red-400`}
                style={{ direction }}
                disabled={loading}
              />
              {errors.message && <p className="text-red-600 mt-1 text-sm">{errors.message}</p>}
            </div>
          <div className="w-full flex justify-center " >
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}             
              className={`px-8 py-3 border-2 rounded-full font-semibold transition duration-300 ${
                theme === "light"
                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                : "border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
              }`}
              >
              {loading ? (
                <svg className="animate-spin h-6 w-6 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : t("sendMessage")}
            </motion.button>
              </div>
          </form>
        </div>
        <br />
        <br />
        <br />
      </section>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 z-50 bg-green-600 text-white px-5 py-3 rounded shadow-lg select-none"
          >
            {statusMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
