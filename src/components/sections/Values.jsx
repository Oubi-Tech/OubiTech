import { memo } from "react";
import { motion } from "framer-motion";
import AnimateSection from "../shared/AnimateSection";

const Values = memo(({ content, darkMode }) => {
  if (!content?.values) return null;

  return (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {content.values.items.map((item, i) => {
          const Icon = item.icon;

          return (
            <AnimateSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`p-8 rounded-3xl border-2 shadow-lg hover:shadow-2xl transition-all text-center ${
                  darkMode
                    ? "bg-gray-800/50 border-purple-500/20"
                    : "bg-gradient-to-br from-blue-50 to-purple-50 border-purple-500/10"
                }`}
              >
                {Icon && (
                  <Icon className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-300" />
                )}
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            </AnimateSection>
          );
        })}
      </div>
    </section>
  );
});

export default Values;
