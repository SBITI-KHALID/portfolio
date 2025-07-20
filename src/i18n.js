import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      khalid: "Khalid Sbiti",
      hi: "Hi",
      myNameIs: "My name is",
      imA: "I'm a",
      fullStackDeveloper: "Full-Stack Developer",
      frontendDeveloper: "Frontend Developer",
      backendDeveloper: "Backend Developer",
      downloadCV: "Download CV",
      profileImageAlt: "Profile image of Khalid Sbiti",
      aboutImageAlt: "Khalid Sbiti",
      aboutTitle: "About Me",
      aboutParagraph1:
        "Hello! I’m {{name}}, a passionate and creative full-stack developer who thrives on building modern, responsive web applications. I specialize in both frontend and backend technologies with a deep love for UI design and user experience.",
      aboutParagraph2:
        "Whether it's crafting clean interfaces or solving backend logic, I enjoy the entire journey of bringing ideas to life through code. I believe in continuous learning, clean code, and meaningful design.",

      // AcademicLevel translations:
      "Academic Journey": "Academic Journey",
      "Baccalaureate in Life and Earth Sciences": "Baccalaureate in Life and Earth Sciences",
      "Lycée Collégial SIDI ABDELAH GHIAT": "Lycée Collégial SIDI ABDELAH GHIAT",
      "2021 - 2022": "2021 - 2022",
      "Focused on scientific subjects with a specialization in biology and earth sciences.":
        "Focused on scientific subjects with a specialization in biology and earth sciences.",
      "Specialized Technician Diploma in Digital Development (Web Full Stack Option)":
        "Specialized Technician Diploma in Digital Development (Web Full Stack Option)",
      "Specialized Institute of Applied Technology – Sidi Youssef Ben Ali":
        "Specialized Institute of Applied Technology – Sidi Youssef Ben Ali",
      "2023 - 2024": "2023 - 2024",
      "Acquired skills in React.js, Laravel, REST APIs, UX/UI design, and web project management.":
        "Acquired skills in React.js, Laravel, REST APIs, UX/UI design, and web project management.",
      mySkills: "My Skills",

      // Added translations for Experience component:
      showCertificate: "Show certificate",
      hideCertificate: "Hide certificate",
      certificateOf: "Certificate of {{title}}",

      // Added translations for Projects component:
      myProjects: "My Projects",
      loading: "Loading spinner",
      noDescription: "No description available.",
      liveDemo: "Live Demo",
      showMoreProjects: "Show more projects",
      hideProjects: "Hide projects",
      contactMe: "Contact Me",
      yourName: "Your Name",
      yourEmail: "Your Email",
      yourMessage: "Your Message",
      sendMessage: "Send Message",
      loading: "Loading spinner",
      pleaseEnterName: "Please enter your name.",
      pleaseEnterEmail: "Please enter your email.",
      pleaseEnterValidEmail: "Please enter a valid email address.",
      pleaseEnterMessage: "Please enter your message.",
      messageSentSuccess: "Message sent successfully!",
      messageSendFailed: "Failed to send message. Please try again.",
      enterName: 'Please enter your name',
      enterEmail: 'Please enter an email address',
      validEmail: 'There is an error in the email format',
      enterMessage: 'Please fill in the field'

    }
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
      khalid: "Khalid Sbiti",
      hi: "Salut",
      myNameIs: "Je m'appelle",
      imA: "Je suis Développeur",
      fullStackDeveloper: "Full-Stack",
      frontendDeveloper: "Front-end",
      backendDeveloper: "Back-end",
      downloadCV: "Télécharger CV",
      profileImageAlt: "Image de profil de Khalid Sbiti",
      aboutImageAlt: "Khalid Sbiti",
      aboutTitle: "À propos de moi",
      aboutParagraph1:
        "Bonjour! Je suis {{name}}, un développeur full-stack passionné et créatif, qui aime construire des applications web modernes et réactives. Je me spécialise dans les technologies frontend et backend avec un grand amour pour le design UI et l'expérience utilisateur.",
      aboutParagraph2:
        "Que ce soit pour créer des interfaces propres ou résoudre la logique backend, j'apprécie tout le processus de donner vie aux idées via le code. Je crois en l'apprentissage continu, le code propre et le design significatif.",

      // AcademicLevel translations:
      "Academic Journey": "Parcours académique",
      "Baccalaureate in Life and Earth Sciences": "Baccalauréat en Sciences de la Vie et de la Terre",
      "Lycée Collégial SIDI ABDELAH GHIAT": "Lycée Collégial SIDI ABDELAH GHIAT",
      "2021 - 2022": "2021 - 2022",
      "Focused on scientific subjects with a specialization in biology and earth sciences.":
        "Concentré sur les matières scientifiques avec une spécialisation en biologie et sciences de la terre.",
      "Specialized Technician Diploma in Digital Development (Web Full Stack Option)":
        "Diplôme de Technicien Spécialisé en Développement Digital (Option Web Full Stack)",
      "Specialized Institute of Applied Technology – Sidi Youssef Ben Ali":
        "Institut Spécialisé de Technologie Appliquée – Sidi Youssef Ben Ali",
      "2023 - 2024": "2023 - 2024",
      "Acquired skills in React.js, Laravel, REST APIs, UX/UI design, and web project management.":
        "Compétences acquises en React.js, Laravel, REST APIs, design UX/UI et gestion de projet web.",
      mySkills: "Mes Compétences",

      // Added translations for Experience component:
      showCertificate: "Afficher le certificat",
      hideCertificate: "Masquer le certificat",
      certificateOf: "Certificat de {{title}}",

      // Added translations for Projects component:
      myProjects: "Mes Projets",
      loading: "Chargement",
      noDescription: "Pas de description disponible.",
      liveDemo: "Démo en ligne",
      showMoreProjects: "Afficher plus de projets",
      hideProjects: "Masquer les projets",
      contactMe: "Contactez-moi",
      yourName: "Votre nom",
      yourEmail: "Votre email",
      yourMessage: "Votre message",
      sendMessage: "Envoyer le message",
      loading: "Chargement",
      pleaseEnterName: "Veuillez entrer votre nom.",
      pleaseEnterEmail: "Veuillez entrer votre email.",
      pleaseEnterValidEmail: "Veuillez entrer une adresse email valide.",
      pleaseEnterMessage: "Veuillez entrer votre message.",
      messageSentSuccess: "Message envoyé avec succès !",
      messageSendFailed: "Échec de l'envoi du message. Veuillez réessayer.",
      enterName:'Veuillez entrer votre nom',
      enterEmail:"Veuillez saisir une adresse e-mail",
      validEmail:"Il y a une erreur dans la structure de l'e-mail",
      enterMessage:"Veuillez remplir le champ"
    }
  },
  ar: {
    translation: {
      home: "الرئيسية",
      about: "معلومات عني",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "تواصل",
      khalid: "خالد السبيطي",
      hi: "مرحباً",
      myNameIs: "اسمي",
      imA: "أنا مطور",
      fullStackDeveloper: "ويب متكامل",
      frontendDeveloper: "الواجهة الأمامية",
      backendDeveloper: "الواجهة الخلفية",
      downloadCV: "تحميل السيرة الذاتية",
      profileImageAlt: "صورة الملف الشخصي لخالد السبيطي",
      aboutImageAlt: "خالد سبيتي",
      aboutTitle: "نبذة عني",
      aboutParagraph1:
        "مرحباً! أنا {{name}}، مطور Full-Stack شغوف ومبدع، أحب بناء تطبيقات ويب حديثة ومتجاوبة. أتخصص في تقنيات الواجهة الأمامية والخلفية مع حب عميق لتصميم واجهات المستخدم وتجربة المستخدم.",
      aboutParagraph2:
        "سواء كان إنشاء واجهات نظيفة أو حل المنطق الخلفي، أستمتع بكامل رحلة تحويل الأفكار إلى واقع عبر البرمجة. أؤمن بالتعلم المستمر، كتابة كود نظيف، وتصميم  أنيق.",

      // AcademicLevel translations:
      "Academic Journey": "المسار الأكاديمي",
      "Baccalaureate in Life and Earth Sciences": "البكالوريا في علوم الحياة والأرض",
      "Lycée Collégial SIDI ABDELAH GHIAT": "ثانوية سيدي عبد الله غيات",
      "2021 - 2022": "2021 - 2022",
      "Focused on scientific subjects with a specialization in biology and earth sciences.":
        "تخصص علوم الحياة والأرض",
      "Specialized Technician Diploma in Digital Development (Web Full Stack Option)":
        "دبلوم تقني متخصص في التطوير الرقمي (اختيار الويب الكامل)",
      "Specialized Institute of Applied Technology – Sidi Youssef Ben Ali":
        "المعهد المتخصص للتكنولوجيا التطبيقية – سيدي يوسف بن علي",
      "2023 - 2024": "2023 - 2024",
      "Acquired skills in React.js, Laravel, REST APIs, UX/UI design, and web project management.":
        "اكتساب مهارات في React.js، Laravel، REST APIs، تصميم UX/UI، وإدارة مشاريع الويب.",
      mySkills: "مهاراتي",

      // Added translations for Experience component:
      showCertificate: "عرض الشهادة",
      hideCertificate: "إخفاء الشهادة",
      certificateOf: "شهادة {{title}}",

      // Added translations for Projects component:
      myProjects: "مشاريعي",
      loading: "جارٍ التحميل",
      noDescription: "لا يوجد وصف متاح.",
      liveDemo: "عرض مباشر",
      showMoreProjects: "عرض المزيد من المشاريع",
      hideProjects: "إخفاء المشاريع",
      contactMe: "تواصل معي",
      yourName: "اسمك",
      yourEmail: "بريدك الإلكتروني",
      yourMessage: "رسالتك",
      sendMessage: "أرسل الرسالة",
      loading: "جار التحميل",
      pleaseEnterName: "يرجى إدخال اسمك.",
      pleaseEnterEmail: "يرجى إدخال بريدك الإلكتروني.",
      pleaseEnterValidEmail: "يرجى إدخال بريد إلكتروني صحيح.",
      pleaseEnterMessage: "يرجى إدخال رسالتك.",
      messageSentSuccess: "تم إرسال الرسالة بنجاح!",
      messageSendFailed: "فشل في إرسال الرسالة. حاول مرة أخرى.",
      enterName:'المرجو ادخال اسمك',
      enterEmail:'المرجو ادخال بريد إلكتروني',
      validEmail:'هناك خطأ في بنية البريد الإلكتروني',
      enterMessage:'المرجو ملأ الحقل'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
