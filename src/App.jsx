import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from './api.js';
import {
  Moon,
  Sun,
  Globe,
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
} from "lucide-react";
// import { translations } from './data';

/* =========================
   Translations (AR + EN)
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
      subtitle: "حلول مبتكرة تناسب نمو عملك",
      items: [
        {
          icon: Code,
          title: "تطوير المواقع",
          desc: "مواقع عصرية سريعة ومصممة بعناية",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Smartphone,
          title: "تطبيقات الجوال",
          desc: "تطبيقات مرنة بواجهات استخدام ممتعة",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Cloud,
          title: "حلول سحابية",
          desc: "أنظمة مستقرة وآمنة قابلة للتوسع",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: ShoppingCart,
          title: "متاجر إلكترونية",
          desc: "منصات بيع متكاملة تزيد من مبيعاتك",
          color: "from-orange-500 to-red-500",
        },
        {
          icon: Zap,
          title: "ذكاء اصطناعي",
          desc: "تشغيل أسرع – قرارات أدق – مهام مؤتمتة",
          color: "from-yellow-500 to-amber-500",
        },
        {
          icon: TrendingUp,
          title: "استشارات تقنية",
          desc: "نرسم طريقك التقني خطوة بخطوة",
          color: "from-indigo-500 to-blue-500",
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
    portfolio: {
      title: "قصص نجاح",
      subtitle: "مشاريع صنعت فرقاً حقيقياً",
    },
    teamTitle: "فريقنا",
    testimonialsTitle: "آراء عملائنا",
    cta: {
      title: "جاهز نسمع فكرتك؟",
      subtitle: "محادثة قصيرة قد تغيّر كل شيء",
      button: "احجز مكالمة مجانية",
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
      badge: "🎉 +200 Success Stories",
      greeting: "Hello, we are Oubi Tech 👋",
      title: "We turn your digital vision into reality",
      subtitle:
        "We don’t just build software — we build experiences worth remembering.",
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
      subtitle: "Solutions designed to scale your business",
      items: [
        {
          icon: Code,
          title: "Web Development",
          desc: "Fast, modern & refined websites",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Smartphone,
          title: "Mobile Apps",
          desc: "Smooth, elegant & efficient apps",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Cloud,
          title: "Cloud Solutions",
          desc: "Secure & scalable architecture",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: ShoppingCart,
          title: "E-Commerce",
          desc: "Convert visitors into loyal customers",
          color: "from-orange-500 to-red-500",
        },
        {
          icon: Zap,
          color: "from-yellow-500 to-amber-500",
          title: "AI Automation",
          desc: "Smarter work, faster operations",
        },
        {
          icon: TrendingUp,
          title: "Tech Consulting",
          desc: "We guide your digital decisions",
          color: "from-indigo-500 to-blue-500",
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
  },
};



/* =========================
   Reusable animation wrapper
   ========================= */
const AnimateSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, margin: "-120px" }}
  >
    {children}
  </motion.div>
);

/* =========================
   Book a Call Drawer (Side)
   ========================= */
const BookCallDrawer = ({ open, onClose, darkMode }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [when, setWhen] = useState("");
  const [notes, setNotes] = useState("");

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();

    const result = await api('/api/v1/mailing/send', {
      name,
      companyName: company,
      companyEmail: email,
      preferredTime: when,
      notes
    });

    console.log(result);
    
    // // Placeholder submit: open default email with prefilled body
    // const subject = `Call booking - ${name || "New Lead"}`;
    // const body = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPreferred time: ${when}\nNotes:\n${notes}`;
    // window.location.href = `mailto:hello@oubitech.com?subject=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 z-[-1]" onClick={onClose} />
      <div className={ darkMode ? "w-full max-w-md h-full bg-gray-800 border-l border-purple-500/20 p-6 overflow-y-auto shadow-2xl"
                                  : "w-full max-w-md h-full bg-white border-l border-purple-500/20 p-6 overflow-y-auto shadow-2xl"}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            احجز مكالمة
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">الاسم / Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-800"
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">الشركة / Company</label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">الإيميل / Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-800"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">
              الوقت المفضل / Preferred Time
            </label>
            <input
              value={when}
              onChange={(e) => setWhen(e.target.value)}
              placeholder="مثال: الإثنين 3 مساءً / Mon 3pm"
              className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">ملاحظات / Notes</label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-800"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border"
            >
              إلغاء / Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            >
              إرسال / Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* =========================
   Navbar (B) transparent + sticky
   with Mobile Drawer menu
   ========================= */
const Navbar = ({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  menuOpen,
  setMenuOpen,
  content,
  scrolled,
  onBook,
}) => (
  <nav
    className={`fixed w-full z-50 transition-all duration-500
      ${
        scrolled
          ? darkMode
            ? "bg-gray-900/80 backdrop-blur-xl shadow-xl border-b border-purple-500/20"
            : "bg-white/80 backdrop-blur-xl shadow-xl border-b border-purple-500/10"
          : "bg-transparent"
      }
    `}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Oubi tech
        </span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {content.nav.map((item, i) => (
          <a
            key={i}
            href={`#section-${i}`}
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
        <button
          onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
          className="px-3 py-2 rounded-lg border hover:bg-purple-100 dark:hover:bg-purple-900/20 transition"
        >
          {language === "ar" ? "EN" : "ع"}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg border hover:bg-purple-100 dark:hover:bg-purple-900/20 transition"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
        <button
          onClick={onBook}
          className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-semibold hover:scale-105 transition"
        >
          {language === "ar" ? "احجز مكالمة" : "Book a Call"}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2.5"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {/* Mobile Drawer menu */}
    {menuOpen && (
      <div
        className={`${
          darkMode ? "bg-gray-800/95" : "bg-white/95"
        } backdrop-blur-xl border-t ${
          darkMode ? "border-purple-500/20" : "border-purple-500/10"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {content.nav.map((item, i) => (
            <a
              key={i}
              href={`#section-${i}`}
              className="block py-3 px-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onBook();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold"
          >
            {language === "ar" ? "احجز مكالمة" : "Book a Call"}
          </button>
        </div>
      </div>
    )}
  </nav>
);

/* =========================
   Sections
   ========================= */
const Hero = ({ content, darkMode }) => (
  <AnimateSection>
    <section
      id="section-0"
      className="pt-32 pb-20 px-4 min-h-screen text-center"
    >
      <div className="inline-block px-6 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 font-medium animate-bounce">
        {content.hero.badge}
      </div>
      <h1 className="text-3xl mt-6 text-gray-600 dark:text-gray-300">
        {content.hero.greeting}
      </h1>
      <h2 className="text-5xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {content.hero.title}
      </h2>
      <p className="text-lg md:text-2xl max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300">
        {content.hero.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-all flex items-center gap-2">
          {content.hero.cta1} <Heart className="w-5 h-5" />
        </button>
        <a
          href="#section-4"
          className="px-8 py-4 border-2 rounded-full font-semibold hover:scale-105 transition-all border-gray-300 dark:border-gray-700"
        >
          {content.hero.cta2}
        </a>
      </div>
    </section>
  </AnimateSection>
);

const Values = ({ content, darkMode }) => (
  <AnimateSection>
    <section id="section-1" className="py-20 px-4 text-center">
      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {content.values.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        {content.values.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {content.values.items.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border-2 hover:-translate-y-2 transition-all ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-gradient-to-br from-blue-50 to-purple-50 border-purple-500/10"
            }`}
          >
            <item.icon className="text-purple-600 dark:text-purple-300 w-10 h-10 mx-auto mb-4" />
            <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const Stats = ({ content, darkMode }) => (
  <AnimateSection>
    <section className="py-12 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {content.stats.map((stat, i) => (
          <div
            key={i}
            className={`text-center p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border-2 ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const Services = ({ content }) => (
  <AnimateSection>
    <section id="section-2" className="py-20 px-4 text-center">
      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {content.services.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        {content.services.subtitle}
      </p>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {content.services.items.map((service, i) => (
          <div
            key={i}
            className={`p-10 rounded-3xl text-center shadow-md bg-gradient-to-br ${service.color} text-white hover:scale-105 transition`}
          >
            <service.icon className="w-10 h-10 mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
            <p className="text-white/90">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const Process = ({ content, darkMode }) => (
  <AnimateSection>
    <section id="section-3" className="py-20 px-4 text-center">
      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {content.process.title}
      </h3>
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto mt-12">
        {content.process.steps.map((step, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border-2 hover:-translate-y-2 transition-all ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <step.icon className="w-10 h-10 mx-auto text-purple-500 dark:text-purple-300" />
            <h4 className="font-bold text-xl mt-4 mb-2">{step.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const Portfolio = ({ darkMode }) => (
  <AnimateSection>
    <section id="section-4" className="py-20 px-4 text-center">
      <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        قصص نجاح
      </h3>
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
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
          <div
            key={i}
            className={`p-8 rounded-3xl border-2 hover:-translate-y-2 transition-all shadow-md ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <div className="text-6xl">{p.image}</div>
            <h4 className="text-2xl font-bold mt-4">{p.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
            <div className="text-purple-600 dark:text-purple-300 mt-3 font-semibold">
              {p.metric}
            </div>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const Team = ({ darkMode }) => (
  <AnimateSection>
    <section id="section-5" className="py-20 px-4 text-center">
      <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        فريقنا
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            avatar: "👩‍💻",
            name: "ليلى",
            role: "UX Lead",
            quote: "التجربة تأتي قبل الشكل.",
          },
          {
            avatar: "👨‍💻",
            name: "مروان",
            role: "Software Engineer",
            quote: "الكود الجيد يعيش طويلاً.",
          },
          {
            avatar: "🎨",
            name: "هند",
            role: "UI Designer",
            quote: "كل بكسل له معنى.",
          },
          {
            avatar: "🧠",
            name: "سامي",
            role: "AI Strategist",
            quote: "الذكاء يصنع فرقاً.",
          },
          {
            avatar: "🔧",
            name: "يوسف",
            role: "System Architect",
            quote: "الأداء هو الأساس.",
          },
          {
            avatar: "🚀",
            name: "نور",
            role: "Project Lead",
            quote: "التنظيم يخلق النجاح.",
          },
        ].map((m, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border-2 shadow-md hover:-translate-y-2 transition-all ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <div className="text-6xl">{m.avatar}</div>
            <h4 className="font-bold text-xl mt-4">{m.name}</h4>
            <p className="text-purple-500 dark:text-purple-300 text-sm mt-1">
              {m.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">{m.quote}</p>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const Testimonials = ({ darkMode }) => (
  <AnimateSection>
    <section id="section-6" className="py-20 px-4 text-center">
      <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        آراء عملائنا
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          { text: "تعامل احترافي وجودة عالية.", name: "شركة في ألمانيا" },
          { text: "النتيجة تفوق المتوقع.", name: "منصة تعليم في السعودية" },
          { text: "تجربة رائعة من كل جانب.", name: "شركة موضة في الإمارات" },
        ].map((t, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border-2 hover:-translate-y-2 transition-all shadow-md ${
              darkMode
                ? "bg-gray-800/50 border-purple-500/20"
                : "bg-white border-purple-500/10"
            }`}
          >
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              “{t.text}”
            </p>
            <p className="text-purple-600 dark:text-purple-300 font-semibold">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  </AnimateSection>
);

const CTA = ({ content, onBook }) => (
  <AnimateSection>
    <section id="section-7" className="py-24 px-4 text-center">
      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {content.cta.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        {content.cta.subtitle}
      </p>
      <button
        onClick={onBook}
        className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-all"
      >
        {content.cta.button}
      </button>
    </section>
  </AnimateSection>
);

const Footer = ({ language }) => (
  <footer className="py-12 text-center text-gray-500">
    © {new Date().getFullYear()} Oubi Tech —{" "}
    {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}
  </footer>
);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } transition-all`}
    >
      <Navbar
        {...{
          darkMode,
          setDarkMode,
          language,
          setLanguage,
          menuOpen,
          setMenuOpen,
          content,
          scrolled,
        }}
        onBook={() => setBookOpen(true)}
      />
      <BookCallDrawer open={bookOpen} onClose={() => setBookOpen(false)} darkMode={darkMode}/>

      <Hero content={content} darkMode={darkMode} />
      <Values content={content} darkMode={darkMode} />
      <Stats content={content} darkMode={darkMode} />
      <Services content={content} />
      <Process content={content} darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Team darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <CTA content={content} onBook={() => setBookOpen(true)} />
      <Footer language={language} />
    </div>
  );
}
