import { memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateSection from "../shared/AnimateSection";

const Hero = memo(({ content, onBook }) => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      id="section-0"
      className="relative min-h-screen pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <AnimateSection>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-block px-6 py-2 mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
          >
            {content.hero.badge}
          </motion.div>
        </AnimateSection>

        <AnimateSection delay={0.1}>
          <h1 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
            {content.hero.greeting}
          </h1>
        </AnimateSection>

        <AnimateSection delay={0.2}>
          <h2 className="mt-6 text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {content.hero.title}
          </h2>
        </AnimateSection>

        <AnimateSection delay={0.3}>
          <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            {content.hero.subtitle}
          </p>
        </AnimateSection>

        <AnimateSection delay={0.4}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBook}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
            >
              {content.hero.cta1}
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#section-4"
              className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 font-semibold hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-all"
            >
              {content.hero.cta2}
            </motion.a>
          </div>
        </AnimateSection>
      </div>
    </section>
  );
});

export default Hero;
