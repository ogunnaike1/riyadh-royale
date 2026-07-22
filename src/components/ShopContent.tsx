"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ImageSlot } from "./ImageSlot";
import { products, type Product, type ProductCategory } from "@/data/products";

const TABS: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "signature", label: "Signature" },
];

const TICKER_ITEMS = [
  "HANDCRAFTED IN GRASSE",
  "SMALL-BATCH PERFUMERY",
  "RARE NATURALS",
  "MADE TO LAST",
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 56, scale: 0.94, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 4) * 0.08,
      }}
    >
      <motion.div
        className="group relative rounded-md p-6"
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
        <span
          className="absolute left-9 top-9 z-10 rounded-full px-3 py-1 text-[10px] font-medium tracking-[1.5px] text-cream"
          style={{ background: "rgba(114,46,55,0.75)" }}
        >
          {product.category === "featured" ? "FEATURED" : "SIGNATURE"}
        </span>

        <div
          className="relative mb-5 w-full overflow-hidden rounded"
          style={{ aspectRatio: "3/4" }}
        >
          <motion.div className="h-[116%] w-full" style={{ y: imageY }}>
            <ImageSlot
              label={product.placeholder}
              src={product.image}
              objectPosition={product.imagePosition}
              className="h-full"
            />
          </motion.div>

          <motion.button
            type="button"
            onClick={() => {
              setAdded(true);
              setTimeout(() => setAdded(false), 1800);
            }}
            whileHover={{ y: -2 }}
            className="absolute inset-x-3 bottom-3 rounded-sm py-3 text-[12px] font-medium tracking-[1.5px] text-cream opacity-0 no-underline transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: added ? "rgba(160,82,45,0.92)" : "rgba(114,46,55,0.85)",
              backdropFilter: "blur(6px)",
            }}
          >
            {added ? "ADDED ✓" : "ADD TO BAG"}
          </motion.button>
        </div>

        <div className="mb-1.5 font-display text-[22px] font-semibold text-ink">
          {product.name}
        </div>
        <div className="mb-3.5 text-[13px] font-light leading-[1.5] text-muted">
          {product.notes}
        </div>
        <div className="text-sm tracking-[1px] text-teal">${product.price}</div>
      </motion.div>
    </motion.div>
  );
}

export function ShopContent() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const filtered =
    category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <>
      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-40 sm:px-10 md:px-16">
        <div className="relative z-[2] mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 text-[12px] tracking-[1.5px] text-cream/60"
          >
            <a href="/#home" className="no-underline hover:text-cream">
              HOME
            </a>
            <span>/</span>
            <span className="text-cream">SHOP</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-[13px] tracking-[5px] text-teal"
          >
            THE FULL COLLECTION
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-[640px] font-display text-[44px] font-medium leading-[1.12] text-cream sm:text-[56px]"
          >
            Shop All Fragrances
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-[460px] text-[16px] font-light leading-[1.7] text-cream/80"
          >
            Eight compositions, one atelier. Every bottle is finished by hand
            in small batches in Grasse, France.
          </motion.p>
        </div>
      </section>

      <div className="overflow-hidden border-y border-hairline bg-surface py-4">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex shrink-0 items-center">
              {TICKER_ITEMS.map((item) => (
                <span
                  key={item}
                  className="flex items-center px-8 text-[12px] font-medium tracking-[2px] text-teal"
                >
                  {item}
                  <span className="ml-8 text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="all-scents" className="mx-auto max-w-[1320px] px-6 py-28 sm:px-10 md:px-16">
        <div className="mb-14 flex justify-center">
          <div
            className="inline-flex gap-1 rounded-full p-1"
            style={{
              background: "rgba(114,46,55,0.06)",
              border: "1px solid rgba(114,46,55,0.15)",
            }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setCategory(tab.key)}
                className="relative rounded-full px-6 py-2.5 text-[13px] font-medium tracking-[1px] transition-colors duration-200"
                style={{ color: category === tab.key ? "#F5F5DC" : "#722E37" }}
              >
                {category === tab.key && (
                  <motion.div
                    layoutId="shop-tab-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-[1]">{tab.label.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
