/**
 * generate-app.js
 * Run: node generate-app.js
 * Output: App.jsx (FULL, animated, AR/EN, dark mode)
 */

const fs = require("fs");

const app = `
/* ============================================
   FULL App.jsx
   Generated automatically
============================================ */

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
  Coffee,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* =========================
   TRANSLATIONS (AR + EN)
========================= */
const translations = {
  ar: {
    nav: ["الرئيسية","من نحن","خدماتنا","رحلتنا","فريقنا","تواصل معنا"],
    hero: {
      badge: "🎉 أكثر من 200 قصة نجاح",
      greeting: "مرحباً، نحن أوبي تك 👋",
      title: "نحوّل أحلامك الرقمية إلى واقع",
      subtitle: "لسنا مجرد شركة برمجيات — نحن شريكك في بناء شيء يستحق الفخر.",
      cta: "احجز مكالمة",
    },
    services: {
      title: "خدماتنا",
      items: [
        { icon: ShoppingCart, title: "متاجر إلكترونية", color: "from-purple-500 to-pink-500" },
        { icon: Cloud, title: "منصات خدمية", color: "from-green-500 to-emerald-500" },
        { icon: Smartphone, title: "تطبيقات موبايل", color: "from-teal-500 to-green-500" },
        { icon: Zap, title: "أنظمة دفع", color: "from-yellow-500 to-orange-500" },
      ],
    },
  },
  en: {
    nav: ["Home","About","Services","Process","Team","Contact"],
    hero: {
      badge: "🎉 200+ Success Stories",
      greeting: "Hello, we are Oubi Tech 👋",
      title: "We build digital products",
      subtitle: "Software that makes an impact.",
      cta: "Book a Call",
    },
    services: {
      title: "Services",
      items: [
        { icon: ShoppingCart, title: "E-commerce", color: "from-purple-500 to-pink-500" },
        { icon: Cloud, title: "Platforms", color: "from-green-500 to-emerald-500" },
        { icon: Smartphone, title: "Mobile Apps", color: "from-teal-500 to-green-500" },
        { icon: Zap, title: "Payments", color: "from-yellow-500 to-orange-500" },
      ],
    },
  },
};

/* =========================
   MAIN APP
========================= */
export default function App() {
  const [lang, setLang] = useState("ar");
  const [dark, setDark] = useState(false);

  const content = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className={dark ? "dark" : ""}>
      <nav className="p-4 flex justify-between">
        <span className="font-bold">Oubi Tech</span>
        <div className="flex gap-2">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}>
            {lang === "ar" ? "EN" : "ع"}
          </button>
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>

      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold">{content.hero.title}</h1>
        <p className="mt-4">{content.hero.subtitle}</p>
      </section>

      <section className="py-20">
        <h2 className="text-4xl text-center mb-12">{content.services.title}</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {content.services.items.map((s, i) => (
            <div
              key={i}
              className={\`p-6 rounded-2xl text-white bg-gradient-to-br \${s.color}\`}
            >
              <s.icon className="mb-4" />
              <h4 className="font-bold">{s.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync("App.jsx", app.trim(), "utf-8");
console.log("✅ App.jsx generated successfully");
