"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink px-16 py-[180px]"
    >
      <motion.div
        className="animate-float-slow pointer-events-none absolute z-[1] rounded-full"
        style={{
          width: 460,
          height: 460,
          top: -100,
          right: -80,
          background:
            "radial-gradient(circle, rgba(245,245,220,0.12), rgba(245,245,220,0) 70%)",
          y: blob1Y,
        }}
      />
      <motion.div
        className="animate-float-slow-2 pointer-events-none absolute z-[1] rounded-full"
        style={{
          width: 380,
          height: 380,
          bottom: -120,
          left: -60,
          background:
            "radial-gradient(circle, rgba(160,82,45,0.2), rgba(160,82,45,0) 70%)",
          y: blob2Y,
        }}
      />
      <div className="relative z-[2] mx-auto max-w-[840px] text-center">
        <div className="mb-5 text-[13px] tracking-[5px] text-cream">
          AN IMMERSIVE RITUAL
        </div>
        <h2 className="mb-7 font-display text-[46px] font-medium leading-[1.2] text-cream">
          Fragrance Is Not Worn. It Is Experienced.
        </h2>
        <p className="mb-11 text-[17px] font-light leading-[1.85] text-cream/75">
          Step into our flagship atelier for a private consultation — layer
          notes, discover your accord, and leave with a scent composed for
          you alone.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-3 rounded-sm border border-cream px-[34px] py-4 text-[13px] tracking-[2px] text-cream no-underline"
        >
          BOOK A CONSULTATION
        </a>
      </div>
    </section>
  );
}
