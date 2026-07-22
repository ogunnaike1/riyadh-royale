"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "“A fragrance house that still treats scent as craft, not marketing.”",
    name: "C. Whitfield",
  },
  {
    quote:
      "“Velvet Oud lasts the entire day and somehow still feels understated.”",
    name: "M. Laurent",
  },
  {
    quote:
      "“The consultation alone was worth the visit — they built a scent around me.”",
    name: "A. Okafor",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-16 py-40">
      <div className="mb-20 text-center">
        <div className="mb-4 text-[13px] tracking-[5px] text-teal">
          FROM OUR COLLECTORS
        </div>
        <h2 className="font-display text-[44px] font-medium text-ink">
          Words From Our Collectors
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: (i * 120) / 1000,
            }}
            className="rounded-md p-9"
            style={{
              background: "rgba(245,245,220,0.6)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(114,46,55,0.18)",
            }}
          >
            <div className="mb-[18px] text-xl text-gold">★★★★★</div>
            <p className="mb-5 font-display text-[19px] italic leading-[1.6] text-ink">
              {item.quote}
            </p>
            <div className="text-[13px] tracking-[1px] text-teal">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
