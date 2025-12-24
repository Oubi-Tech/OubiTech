import { memo } from "react";
import { motion } from "framer-motion";
import AnimateSection from "../shared/AnimateSection";

const Team = memo(({ darkMode, language }) => {
  const team =
    language === "ar"
      ? [
          {
            avatar: "🧑‍💻",
            name: "مصعب",
            role: "قائد الفريق ومهندس تطبيقات",
            quote: "نقود الفريق لنقدّم أفضل نسخة من منتجك.",
          },
          {
            avatar: "🧑‍🎨",
            name: "يوسف",
            role: "UI / UX",
            quote: "نصمم التجربة قبل الواجهة.",
          },
          {
            avatar: "💻",
            name: "معتز",
            role: "Full Stack Engineer",
            quote: "التفاصيل هي الفرق.",
          },
          {
            avatar: "📌",
            name: "نور",
            role: "Project Lead",
            quote: "تنظيم قوي = نتائج أسرع.",
          },
        ]
      : [
          {
            avatar: "🚀",
            name: "Musab",
            role: "Team Lead & Mobile Engineer",
            quote: "We ship products we’re proud of.",
          },
          {
            avatar: "🎨",
            name: "Yousif",
            role: "UI / UX Designer",
            quote: "Experience comes first.",
          },
          {
            avatar: "💻",
            name: "Motaz",
            role: "Full Stack Engineer",
            quote: "Details matter.",
          },
          {
            avatar: "📌",
            name: "Nour",
            role: "Project Lead",
            quote: "Good planning = great results.",
          },
        ];

  return (
    <section id="section-5" className="py-20 px-4 text-center">
      <AnimateSection>
        <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {language === "ar" ? "فريقنا" : "Our Team"}
        </h3>
      </AnimateSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {team.map((m, i) => (
          <AnimateSection key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className={`p-8 rounded-3xl border shadow-lg ${
                darkMode
                  ? "bg-gray-900 border-purple-500/20"
                  : "bg-white border-purple-500/10"
              }`}
            >
              <div className="text-6xl mb-3">{m.avatar}</div>
              <h4 className="font-bold text-xl">{m.name}</h4>
              <p className="text-purple-500 text-sm mt-1">{m.role}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{m.quote}</p>
            </motion.div>
          </AnimateSection>
        ))}
      </div>
    </section>
  );
});

export default Team;
