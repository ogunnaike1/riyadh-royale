"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageSlot } from "./ImageSlot";

export function BrandStory() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, amount: 0.15 });

  return (
    <section id="about" className="bg-surface px-16 py-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5 text-[13px] tracking-[5px] text-teal">
            OUR HERITAGE
          </div>
          <h2 className="mb-7 font-display text-[42px] font-medium leading-[1.2] text-ink">
            The Art of Composition
          </h2>
          <p className="mb-5 text-base font-light leading-[1.85] text-body">
            Every Aurélia fragrance begins as a single idea, refined for
            years before it ever touches skin. Our perfumers source rare
            naturals from small growers and blend them by hand, in small
            batches, in a single Grasse atelier.
          </p>
          <p className="text-base font-light leading-[1.85] text-body">
            We believe a scent should feel inevitable — never loud, never
            generic. Just quietly, unmistakably yours.
          </p>
        </motion.div>
        <div
          ref={imageRef}
          className="w-full overflow-hidden rounded-md"
          style={{ aspectRatio: "4/5" }}
        >
          <div
            className="h-full w-full"
            style={{
              clipPath: imageInView
                ? "inset(0% 0% 0% 0%)"
                : "inset(0% 0% 100% 0%)",
              opacity: imageInView ? 1 : 0,
              transition:
                "clip-path 1s cubic-bezier(.16,1,.3,1), opacity .6s ease",
            }}
          >
            <ImageSlot label="Drop atelier / brand story photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
