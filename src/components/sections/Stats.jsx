import { memo } from "react";
import { motion } from "framer-motion";
import AnimateSection from "../shared/AnimateSection";

const Stats = memo(({ content, darkMode }) => {
  if (!content?.stats) return null;

  return (
    <section id="section-2" className="py-16 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {content.stats.map((stat, i) => (
          <AnimateSection key={i} delay={i * 0.06}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`
                text-center p-8 rounded-3xl border transition-all
                ${
                  darkMode
                    ? "bg-gray-950 border-purple-500/30 glow-card glow-hover"
                    : "bg-white border-purple-500/10 shadow-lg hover:shadow-2xl"
                }
              `}
            >
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  delay: i * 0.08,
                }}
                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.h3>

              <p
                className={`mt-3 font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          </AnimateSection>
        ))}
      </div>
    </section>
  );
});

export default Stats;
