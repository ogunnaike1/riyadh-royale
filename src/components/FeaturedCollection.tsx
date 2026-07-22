"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageSlot } from "./ImageSlot";

const featuredItems = [
  {
    name: "Noir Absolu",
    desc: "Oud, black pepper, amber",
    price: "$285",
    placeholder: "Drop Noir Absolu bottle photo",
  },
  {
    name: "Velvet Oud",
    desc: "Rose, saffron, sandalwood",
    price: "$310",
    placeholder: "Drop Velvet Oud bottle photo",
  },
  {
    name: "Blanc Ambré",
    desc: "Vanilla, white musk, amber",
    price: "$265",
    placeholder: "Drop Blanc Ambré bottle photo",
  },
  {
    name: "Rose Éclat",
    desc: "Bulgarian rose, iris, cedar",
    price: "$295",
    placeholder: "Drop Rose Éclat bottle photo",
  },
];

function FeaturedCard({
  item,
  index,
}: {
  item: (typeof featuredItems)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 56, scale: 0.94, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: (index * 100) / 1000,
      }}
    >
      <motion.div
        className="rounded-md p-6"
        style={{
          background: "rgba(245,245,220,0.55)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(114,46,55,0.18)",
          boxShadow: "0 20px 40px -24px rgba(114,46,55,0.18)",
        }}
        whileHover={{
          y: -8,
          boxShadow: "0 30px 50px -20px rgba(114,46,55,0.28)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div
          className="mb-5 w-full overflow-hidden rounded"
          style={{ aspectRatio: "3/4" }}
        >
          <motion.div className="h-[116%] w-full" style={{ y: imageY }}>
            <ImageSlot label={item.placeholder} className="h-full" />
          </motion.div>
        </div>
        <div className="mb-1.5 font-display text-[22px] font-semibold text-ink">
          {item.name}
        </div>
        <div className="mb-3.5 text-[13px] font-light text-muted">
          {item.desc}
        </div>
        <div className="text-sm tracking-[1px] text-teal">{item.price}</div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedCollection() {
  return (
    <section id="shop" className="mx-auto max-w-[1320px] px-16 py-40">
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-[13px] tracking-[5px] text-teal"
        >
          CURATED FOR YOU
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[44px] font-medium text-ink"
        >
          Featured Collection
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {featuredItems.map((item, i) => (
          <FeaturedCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
