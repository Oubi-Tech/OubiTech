import React, { useState, useEffect, useCallback, memo } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Smartphone,
  Cloud,
  ShoppingCart,
  Zap,
  Users,
  Award,
  Heart,
  Sparkles,
  Target,
  TrendingUp,
  Coffee,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* =========================
   Translations (AR + EN)
   (مع خدمات النسخة القديمة)
   ========================= */
const translations = {
  ar: {
    nav: [
      "الرئيسية",
      "من نحن",
      "خدماتنا",
      "رحلتنا",
      "قصص نجاح",
      "فريقنا",
      "آراء العملاء",
      "تواصل معنا",
    ],
    hero: {
      badge: "🎉 أكثر من 200 قصة نجاح",
      greeting: "مرحباً، نحن أوبي تك 👋",
      title: "نحوّل أحلامك الرقمية إلى واقع",
      subtitle: "لسنا مجرد شركة برمجيات — نحن شريكك في بناء شيء يستحق الفخر.",
      cta1: "ابدأ رحلتك معنا",
      cta2: "شاهد أعمالنا",
    },
    values: {
      title: "لماذا نحن؟",
      subtitle: "نحن نؤمن أن كل مشروع يحتاج شغف وتفاصيل",
      items: [
        {
          icon: Heart,
          title: "نحب ما نفعله",
          desc: "نحن نتعامل مع مشروعك كأنه مشروعنا الشخصي.",
        },
        {
          icon: Users,
          title: "نتعامل كعائلة",
          desc: "هدفنا بناء علاقات تدوم وليس مشاريع مؤقتة.",
        },
        {
          icon: Sparkles,
          title: "نبدع بجرأة",
          desc: "نقدم أفكارًا وتفاصيل تميزك عن غيرك.",
        },
        {
          icon: Target,
          title: "نتائج حقيقية",
          desc: "نقيس النجاح بالنمو والإنجاز وليس بالكلام.",
        },
      ],
    },
    stats: [
      { value: "200+", label: "عميل أصبح شريك نجاح" },
      { value: "5+", label: "سنوات خبرة" },
      { value: "98%", label: "رضا العملاء" },
      { value: "24/7", label: "دعم متواصل" },
    ],
    services: {
      title: "خدماتنا",
      subtitle: "حلول رقمية متكاملة تناسب نمو مشروعك",
      items: [
        {
          icon: ShoppingCart,
          title: "سيستم شحن",
          desc: "نظام متكامل لإدارة الشحن والتتبع والعمولات للمتاجر والشركات.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: ShoppingCart,
          title: "مواقع التجارة الإلكترونية",
          desc: "(E-commerce Websites) متاجر إلكترونية احترافية لزيادة مبيعاتك.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Cloud,
          title: "المواقع الخدمية",
          desc: "(Service Platforms) منصات لخدماتك للعملاء أو الشركات.",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Award,
          title: "المواقع التعليمية",
          desc: "(Educational Platforms) أنظمة كورسات وتعلّم عن بعد.",
          color: "from-orange-500 to-red-500",
        },
        {
          icon: Users,
          title: "أنظمة الإدارة",
          desc: "(ERP & Management Systems) لوحات تحكم وإدارة كاملة لأعمالك.",
          color: "from-indigo-500 to-blue-500",
        },
        {
          icon: Smartphone,
          title: "تطبيقات الموبايل",
          desc: "(Mobile Applications) تطبيقات iOS و Android بأداء عالٍ.",
          color: "from-teal-500 to-green-500",
        },
        {
          icon: Sparkles,
          title: "الصفحات التعريفية والهبوط",
          desc: "(Landing Pages) صفحات سريعة مصممة لزيادة التحويلات.",
          color: "from-yellow-500 to-amber-500",
        },
        {
          icon: Zap,
          title: "أنظمة الحجز والدفع",
          desc: "(Booking & Payment Systems) حجوزات أونلاين مع دفع إلكتروني.",
          color: "from-pink-500 to-rose-500",
        },
      ],
    },
    process: {
      title: "رحلتنا معاً",
      steps: [
        {
          num: "01",
          icon: Coffee,
          title: "نتعرف عليك",
          desc: "جلسة بسيطة لنفهم مشروعك ورؤيتك",
        },
        {
          num: "02",
          icon: Sparkles,
          title: "نرسم الخطة",
          desc: "نضع تفاصيل التنفيذ بوضوح وبدون تعقيد",
        },
        {
          num: "03",
          icon: Code,
          title: "نبدأ التطوير",
          desc: "فريق الإبداع يبدأ بتحويل الفكرة إلى واقع",
        },
        {
          num: "04",
          icon: Award,
          title: "الإطلاق والنجاح",
          desc: "نطلق المشروع ونستمر بدعمك",
        },
      ],
    },
    cta: {
      title: "جاهز نسمع فكرتك؟",
      subtitle: "محادثة قصيرة قد تغيّر كل شيء",
      button: "احجز مكالمة مجانية",
    },
    contact: {
      email: "hello@oubitech.com",
      phone: "+966 XX XXX XXXX",
      location: "الرياض، المملكة العربية السعودية",
    },
  },
  en: {
    nav: [
      "Home",
      "About",
      "Services",
      "Process",
      "Portfolio",
      "Team",
      "Testimonials",
      "Contact",
    ],
    hero: {
      badge: "🎉 200+ Success Stories",
      greeting: "Hello, we are Oubi Tech 👋",
      title: "We turn your digital vision into reality",
      subtitle:
        "We don't just build software — we build experiences worth remembering.",
      cta1: "Start Your Journey",
      cta2: "View Projects",
    },
    values: {
      title: "Why Us?",
      subtitle: "We believe every project deserves attention and care",
      items: [
        {
          icon: Heart,
          title: "We Love What We Do",
          desc: "Your project is treated like ours.",
        },
        {
          icon: Users,
          title: "We Work Like Family",
          desc: "Long-term relationships, not transactions.",
        },
        {
          icon: Sparkles,
          title: "Bold Creativity",
          desc: "We craft unique and memorable work.",
        },
        {
          icon: Target,
          title: "Real Results",
          desc: "Success measured by growth, not talk.",
        },
      ],
    },
    stats: [
      { value: "200+", label: "Partners in Success" },
      { value: "5+", label: "Years Experience" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support" },
    ],
    services: {
      title: "Our Services",
      subtitle: "End-to-end digital solutions to grow your business",
      items: [
        {
          icon: ShoppingCart,
          title: "Shipping Systems",
          desc: "End-to-end shipping, tracking and commissions for stores.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: ShoppingCart,
          title: "E-commerce Websites",
          desc: "High-converting online stores tailored to your brand.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Cloud,
          title: "Service Platforms",
          desc: "Online platforms for your services (B2B / B2C).",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Award,
          title: "Educational Platforms",
          desc: "Modern LMS and course platforms for online learning.",
          color: "from-orange-500 to-red-500",
        },
        {
          icon: Users,
          title: "ERP & Management Systems",
          desc: "Dashboards and tools to manage your operations.",
          color: "from-indigo-500 to-blue-500",
        },
        {
          icon: Smartphone,
          title: "Mobile Applications",
          desc: "High-performance iOS & Android apps.",
          color: "from-teal-500 to-green-500",
        },
        {
          icon: Sparkles,
          title: "Landing & Promo Pages",
          desc: "Fast landing pages crafted to convert visitors.",
          color: "from-yellow-500 to-amber-500",
        },
        {
          icon: Zap,
          title: "Booking & Payment Systems",
          desc: "Online booking with integrated payment flows.",
          color: "from-pink-500 to-rose-500",
        },
      ],
    },
    process: {
      title: "Our Journey",
      steps: [
        {
          num: "01",
          icon: Coffee,
          title: "We Understand You",
          desc: "A friendly talk about your vision",
        },
        {
          num: "02",
          icon: Sparkles,
          title: "We Plan Clearly",
          desc: "Transparent and realistic roadmap",
        },
        {
          num: "03",
          icon: Code,
          title: "We Execute",
          desc: "Turning concepts into a polished outcome",
        },
        {
          num: "04",
          icon: Award,
          title: "Launch & Success",
          desc: "We support & improve continuously",
        },
      ],
    },
    cta: {
      title: "Ready to talk?",
      subtitle: "A short call can change everything.",
      button: "Book Free Call",
    },
    contact: {
      email: "hello@oubitech.com",
      phone: "+966 XX XXX XXXX",
      location: "Riyadh, Saudi Arabia",
    },
  },
};

/* =========================
   Performance-optimized animation wrapper
   ========================= */
const AnimateSection = memo(({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-80px", amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
});

/* =========================
   Book a Call Drawer (Side)
   ========================= */
const BookCallDrawer = memo(({ open, onClose, language }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    when: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      const subject = `Call booking - ${formData.name || "New Lead"}`;
      const body = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPreferred time: ${formData.when}\nNotes:\n${formData.notes}`;
      window.location.href = `mailto:hello@oubitech.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: "", company: "", email: "", when: "", notes: "" });
      }, 2000);
    },
    [formData, onClose]
  );

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex justify-end"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="relative w-full max-w-md h-full bg-white dark:bg-gray-900 border-l border-purple-500/20 p-6 overflow-y-auto shadow-2xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === "ar" ? "احجز مكالمة" : "Book a Call"}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center h-64 gap-4"
          >
            <CheckCircle className="w-16 h-16 text-green-500" />
            <p className="text-xl font-semibold">
              {language === "ar" ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 font-medium">
                {language === "ar" ? "الاسم" : "Name"} *
              </label>
              <input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2.5 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 font-medium">
                  {language === "ar" ? "الشركة" : "Company"}
                </label>
                <input
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2.5 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 font-medium">
                  {language === "ar" ? "الإيميل" : "Email"} *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2.5 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">
                {language === "ar" ? "الوقت المفضل" : "Preferred Time"}
              </label>
              <input
                value={formData.when}
                onChange={(e) => handleChange("when", e.target.value)}
                placeholder={
                  language === "ar"
                    ? "مثال: الإثنين 3 مساءً"
                    : "e.g., Monday 3pm"
                }
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2.5 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">
                {language === "ar" ? "ملاحظات" : "Notes"}
              </label>
              <textarea
                rows={4}
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-2.5 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                {language === "ar" ? "إلغاء" : "Cancel"}
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:scale-105 transition-all font-medium"
              >
                {language === "ar" ? "إرسال" : "Send"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
});

/* =========================
   Navbar with scroll effects
   ========================= */
const Navbar = memo(
  ({
    darkMode,
    setDarkMode,
    language,
    setLanguage,
    menuOpen,
    setMenuOpen,
    content,
    scrolled,
    onBook,
  }) => {
    const handleNavClick = useCallback(
      (e, index) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(`section-${index}`);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      },
      [setMenuOpen]
    );

    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-purple-500/20"
              : "bg-white/90 backdrop-blur-xl shadow-xl border-b border-purple-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oubi tech
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {content.nav.map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                onClick={(e) => handleNavClick(e, i)}
                className="relative group text-sm font-medium"
              >
                <span className="hover:text-purple-600 transition-colors">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all font-medium"
            >
              {language === "ar" ? "EN" : "ع"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all"
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBook}
              className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {language === "ar" ? "احجز مكالمة" : "Book a Call"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5"
            >
              {menuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`${
              darkMode ? "bg-gray-800/95" : "bg-white/95"
            } backdrop-blur-xl border-t ${
              darkMode ? "border-purple-500/20" : "border-purple-500/10"
            } md:hidden`}
          >
            <div className="px-4 py-4 space-y-3">
              {content.nav.map((item, i) => (
                <motion.a
                  key={i}
                  href={`#section-${i}`}
                  onClick={(e) => handleNavClick(e, i)}
                  whileHover={{ x: 5 }}
                  className="block py-3 px-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all"
                >
                  {item}
                </motion.a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onBook();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-lg"
              >
                {language === "ar" ? "احجز مكالمة" : "Book a Call"}
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>
    );
  }
);

/* =========================
   Sections
   ========================= */
const Hero = memo(({ content, darkMode, onBook }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section
      id="section-0"
      className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <AnimateSection>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block px-6 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 font-medium mb-6"
          >
            {content.hero.badge}
          </motion.div>
        </AnimateSection>

        <AnimateSection delay={0.1}>
          <h1 className="text-3xl mt-6 text-gray-600 dark:text-gray-300 font-light">
            {content.hero.greeting}
          </h1>
        </AnimateSection>

        <AnimateSection delay={0.2}>
          <h2 className="text-5xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            {content.hero.title}
          </h2>
        </AnimateSection>

        <AnimateSection delay={0.3}>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            {content.hero.subtitle}
          </p>
        </AnimateSection>

        <AnimateSection delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBook}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              {content.hero.cta1} <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#section-4"
              className="px-8 py-4 border-2 rounded-full font-semibold hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all border-gray-300 dark:border-gray-700"
            >
              {content.hero.cta2}
            </motion.a>
          </div>
        </AnimateSection>
      </div>
    </section>
  );
});

const Values = memo(({ content, darkMode }) => (
  <section id="section-1" className="py-20 px-4">
    <AnimateSection>
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {content.values.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
          {content.values.subtitle}
        </p>
      </div>
    </AnimateSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {content.values.items.map((item, i) => (
        <AnimateSection key={i} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-8 rounded-3xl border-2 transition-all shadow-lg hover:shadow-2xl ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-gradient-to-br from-blue-50 to-purple-50 border-purple-500/10"
            }`}
          >
            <item.icon className="text-purple-600 dark:text-purple-300 w-12 h-12 mx-auto mb-4" />
            <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        </AnimateSection>
      ))}
    </div>
  </section>
));

const Stats = memo(({ content, darkMode }) => (
  <section className="py-12 px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {content.stats.map((stat, i) => (
        <AnimateSection key={i} delay={i * 0.05}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-center p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              {stat.value}
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">
              {stat.label}
            </p>
          </motion.div>
        </AnimateSection>
      ))}
    </div>
  </section>
));

/* =========================
   Services (old version restored)
   ========================= */
const Services = memo(({ content, onBook }) => (
  <AnimateSection>
    <section id="section-2" className="py-10 px-4 text-center">
      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {content.services.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        {content.services.subtitle}
      </p>
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {content.services.items.map((service, i) => (
          <motion.div
            key={i}
            className={`p-8 rounded-3xl text-center shadow-md bg-gradient-to-br ${service.color} text-white relative overflow-hidden group`}
            whileHover={{ y: -8, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <service.icon className="w-10 h-10 mx-auto mb-4 relative z-10" />
            <h4 className="text-2xl font-semibold mb-2 relative z-10">
              {service.title}
            </h4>
            <p className="text-white/90 mb-4 relative z-10">{service.desc}</p>
            <motion.button
              onClick={onBook}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium backdrop-blur relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content === translations.ar ? "اطلب الخدمة" : "Request Service"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  </AnimateSection>
));

const Process = memo(({ content, darkMode }) => (
  <section id="section-3" className="py-20 px-4">
    <AnimateSection>
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {content.process.title}
        </h3>
      </div>
    </AnimateSection>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
      {content.process.steps.map((step, i) => (
        <AnimateSection key={i} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-8 rounded-3xl border-2 relative overflow-hidden group ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <div className="absolute top-4 right-4 text-6xl font-bold text-purple-500/10">
              {step.num}
            </div>
            <step.icon className="w-12 h-12 text-purple-500 dark:text-purple-300 relative z-10" />
            <h4 className="font-bold text-xl mt-4 mb-2 relative z-10">
              {step.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 relative z-10">
              {step.desc}
            </p>
          </motion.div>
        </AnimateSection>
      ))}
    </div>
  </section>
));

const Portfolio = memo(({ darkMode }) => (
  <section id="section-4" className="py-20 px-4">
    <AnimateSection>
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          قصص نجاح
        </h3>
      </div>
    </AnimateSection>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {[
        {
          image: "🌍",
          title: "منصة تعليم دولية",
          desc: "من فكرة إلى 14 دولة.",
          metric: "+12,000 مستخدم",
        },
        {
          image: "🛍️",
          title: "براند أزياء فاخر",
          desc: "تجربة تسوق مميزة.",
          metric: "+180% مبيعات",
        },
        {
          image: "🚚",
          title: "تطبيق توصيل حضري",
          desc: "خدمة أسرع وأسلس.",
          metric: "30,000 طلب شهرياً",
        },
      ].map((p, i) => (
        <AnimateSection key={i} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-10 rounded-3xl border-2 shadow-xl relative overflow-hidden group ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-7xl mb-6">{p.image}</div>
            <h4 className="text-2xl font-bold mb-2">{p.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
            <div className="text-purple-600 dark:text-purple-300 font-semibold text-lg">
              {p.metric}
            </div>
          </motion.div>
        </AnimateSection>
      ))}
    </div>
  </section>
));

/* =========================
   Team (old bilingual version restored)
   ========================= */
const Team = memo(({ darkMode, language }) => {
  const arTeam = [
    {
      avatar: "🧑‍💻",
      name: "مصعب",
      role: "قائد الفريق ومهندس تطبيقات موبايل",
      quote: "نقود الفريق لنقدّم أفضل نسخة من منتجك.",
    },
    {
      avatar: "🧑‍🎨",
      name: "يوسف",
      role: "UI/UX",
      quote: "نصمم التجربة قبل الواجهة.",
    },
    {
      avatar: "💻",
      name: "معتز",
      role: "Full Stack Developer",
      quote: "من الفكرة للبنية الخلفية والواجهة — نهتم بالتفاصيل.",
    },
    {
      avatar: "📌",
      name: "نور",
      role: "Project Lead",
      quote: "التنظيم الجيد يعني إطلاق أسرع ونتائج أوضح.",
    },
  ];

  const enTeam = [
    {
      avatar: "🧑‍🎨",
      name: "Yousif",
      role: "UI/UX Designer",
      quote: "We design the experience before the interface.",
    },
    {
      avatar: "🚀",
      name: "Musab",
      role: "Team Lead & Mobile Apps Engineer",
      quote: "Leading the team to ship products we’re proud of.",
    },
    {
      avatar: "💻",
      name: "Moataz",
      role: "Full Stack Developer",
      quote: "From idea to backend and UI — details matter.",
    },
    {
      avatar: "📌",
      name: "Nour",
      role: "Project Lead",
      quote: "Good planning means faster launches and clearer results.",
    },
  ];

  const team = language === "ar" ? arTeam : enTeam;
  const title = language === "ar" ? "فريقنا" : "Our Team";

  return (
    <AnimateSection delay={0.05}>
      <section id="section-5" className="py-20 px-4 text-center">
        <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={i}
              className={`p-4 rounded-3xl border-2 shadow-md ${
                darkMode
                  ? "bg-gray-800/50 border-purple-500/20"
                  : "bg-white border-purple-500/10"
              }`}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="text-6xl">{m.avatar}</div>
              <h4 className="font-bold text-xl mt-4">{m.name}</h4>
              <p className="text-purple-500 dark:text-purple-300 text-sm mt-1">
                {m.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{m.quote}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
});


const Testimonials = memo(({ darkMode }) => (
  <section id="section-6" className="py-20 px-4">
    <AnimateSection>
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          آراء عملائنا
        </h3>
      </div>
    </AnimateSection>

    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        { text: "تعامل احترافي وجودة عالية.", name: "شركة في ألمانيا" },
        { text: "النتيجة تفوق المتوقع.", name: "منصة تعليم في السعودية" },
        { text: "تجربة رائعة من كل جانب.", name: "شركة موضة في الإمارات" },
      ].map((t, i) => (
        <AnimateSection key={i} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`p-8 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <div className="text-purple-500 text-4xl mb-4">"</div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">
              {t.text}
            </p>
            <p className="text-purple-600 dark:text-purple-300 font-semibold">
              — {t.name}
            </p>
          </motion.div>
        </AnimateSection>
      ))}
    </div>
  </section>
));

const CTA = memo(({ content, onBook }) => (
  <section id="section-7" className="py-24 px-4">
    <AnimateSection>
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {content.cta.title}
          </h3>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {content.cta.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBook}
            className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            {content.cta.button} <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </AnimateSection>
  </section>
));

const Footer = memo(({ language, content }) => (
  <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Oubi tech
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {language === "ar"
              ? "نحول أحلامك الرقمية إلى واقع"
              : "Turning digital dreams into reality"}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            {language === "ar" ? "تواصل معنا" : "Contact"}
          </h4>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{content.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{content.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{content.contact.location}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">
            {language === "ar" ? "روابط سريعة" : "Quick Links"}
          </h4>
          <div className="space-y-2">
            {content.nav.slice(0, 4).map((item, i) => (
              <a
                key={i}
                href={`#section-${i}`}
                className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800 text-gray-500">
        © {new Date().getFullYear()} Oubi Tech —{" "}
        {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}
      </div>
    </div>
  </footer>
));

/* =========================
   MAIN APP
   ========================= */
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);

  const content = translations[language];
  const isRTL = language === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleBookOpen = useCallback(() => setBookOpen(true), []);
  const handleBookClose = useCallback(() => setBookOpen(false), []);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        content={content}
        scrolled={scrolled}
        onBook={handleBookOpen}
      />

      <BookCallDrawer
        open={bookOpen}
        onClose={handleBookClose}
        language={language}
      />

      <Hero content={content} darkMode={darkMode} onBook={handleBookOpen} />
      <Values content={content} darkMode={darkMode} />
      <Stats content={content} darkMode={darkMode} />
      <Services content={content} onBook={handleBookOpen} />
      <Process content={content} darkMode={darkMode} />
      {/* <Portfolio darkMode={darkMode} language={language} /> */}
      <Team darkMode={darkMode} language={language} />
      {/* <Testimonials darkMode={darkMode} language={language} /> */}
      <CTA content={content} onBook={handleBookOpen} />
      <Footer language={language} content={content} />
    </div>
  );
}
