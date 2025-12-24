import { memo } from "react";
import { motion } from "framer-motion";
import AnimateSection from "../shared/AnimateSection";

const Process = memo(({ content, darkMode }) => {
  if (!content?.process) return null;

  return (
    <section id="section-4" className="py-20 px-4">
      <AnimateSection>
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {content.process.title}
          </h3>
        </div>
      </AnimateSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {content.process.steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <AnimateSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`relative p-8 rounded-3xl border ${
                  darkMode
                    ? "bg-gray-900 border-purple-500/20"
                    : "bg-white border-purple-500/10"
                }`}
              >
                <div className="absolute top-4 right-4 text-6xl font-extrabold text-purple-500/10">
                  {step.num}
                </div>

                {Icon && (
                  <Icon className="w-12 h-12 text-purple-600 dark:text-purple-300" />
                )}

                <h4 className="mt-4 text-xl font-bold">{step.title}</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {step.desc}
                </p>
              </motion.div>
            </AnimateSection>
          );
        })}
      </div>
    </section>
  );
});

export default Process;
