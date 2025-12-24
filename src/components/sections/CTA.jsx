import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimateSection from "../shared/AnimateSection";

const CTA = memo(({ content, onBook }) => {
  return (
    <section id="section-6" className="py-24 px-4">
      <AnimateSection>
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-14 shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-6">
            {content.cta.title}
          </h3>
          <p className="text-white/90 mb-8 text-lg">{content.cta.subtitle}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBook}
            className="px-10 py-4 bg-white text-purple-600 rounded-full font-semibold inline-flex items-center gap-2"
          >
            {content.cta.button}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </AnimateSection>
    </section>
  );
});

export default CTA;
