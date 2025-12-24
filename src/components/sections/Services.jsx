import { memo } from "react";
import { motion } from "framer-motion";
import AnimateSection from "../shared/AnimateSection";
import Icon from "../shared/icon"; // mapping icons

const Services = memo(({ content, onBook }) => {
  if (!content?.services) return null;

  return (
    <section id="section-3" className="py-20 px-4">
      <AnimateSection>
        <div className="text-center mb-14">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {content.services.title}
          </h3>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {content.services.subtitle}
          </p>
        </div>
      </AnimateSection>

      {/* 🔹 Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-8 max-w-7xl mx-auto">
        {content.services.items.map((s, i) => (
          <AnimateSection key={i} delay={i * 0.05}>
            <motion.div
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${s.color} text-white shadow-xl cursor-pointer`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Icon name={s.icon} className="w-10 h-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-white/90 mb-4">{s.desc}</p>

              <button
                onClick={onBook}
                className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-sm"
              >
                {content === "ar" ? "اطلب الخدمة" : "Request Service"}
              </button>
            </motion.div>
          </AnimateSection>
        ))}
      </div>

      {/* 🔹 Mobile Carousel */}
      <div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-2">
        {content.services.items.map((s, i) => (
          <motion.div
            key={i}
            whileTap={{ scale: 0.95 }}
            className={`min-w-[85%] snap-center p-6 rounded-3xl bg-gradient-to-br ${s.color} text-white shadow-xl`}
          >
            <Icon name={s.icon} className="w-9 h-9 mb-3" />
            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
            <p className="text-white/90 mb-3">{s.desc}</p>
            <button
              onClick={onBook}
              className="px-4 py-2 rounded-full bg-white/20"
            >
              {content === "ar" ? "اطلب الخدمة" : "Request"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default Services;
