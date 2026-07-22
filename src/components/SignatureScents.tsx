"use client";

import { motion } from "framer-motion";
import { ImageSlot } from "./ImageSlot";

const signatureItems = [
  {
    name: "Santal Nuit",
    notes: "Top: bergamot · Heart: sandalwood · Base: musk",
    placeholder: "Drop Santal Nuit photo",
  },
  {
    name: "Jasmin Doré",
    notes: "Top: mandarin · Heart: jasmine · Base: amber",
    placeholder: "Drop Jasmin Doré photo",
  },
  {
    name: "Cuir Royal",
    notes: "Top: pink pepper · Heart: leather · Base: vetiver",
    placeholder: "Drop Cuir Royal photo",
  },
  {
    name: "Fleur de Sel",
    notes: "Top: bergamot · Heart: salt accord · Base: driftwood",
    placeholder: "Drop Fleur de Sel photo",
  },
];

export function SignatureScents() {
  return (
    <section id="collections" className="overflow-hidden py-40">
      <div className="mx-auto mb-16 max-w-[1320px] px-16 text-center">
        <div className="mb-4 text-[13px] tracking-[5px] text-teal">
          A SCENT FOR EVERY MOMENT
        </div>
        <h2 className="font-display text-[44px] font-medium text-ink">
          Signature Scents
        </h2>
      </div>
      <motion.div
        className="flex gap-7 overflow-x-auto px-16 pb-6 pt-1"
        style={{ scrollSnapType: "x mandatory" }}
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {signatureItems.map((item) => (
          <div
            key={item.name}
            className="rounded-md p-[22px]"
            style={{
              flex: "0 0 340px",
              scrollSnapAlign: "start",
              background: "rgba(245,245,220,0.6)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(114,46,55,0.18)",
              boxShadow: "0 24px 44px -28px rgba(114,46,55,0.2)",
            }}
          >
            <div
              className="mb-[18px] w-full overflow-hidden rounded"
              style={{ aspectRatio: "1/1" }}
            >
              <ImageSlot label={item.placeholder} />
            </div>
            <div className="mb-2 font-display text-[22px] font-semibold text-ink">
              {item.name}
            </div>
            <div className="text-[13px] font-light leading-[1.6] text-muted">
              {item.notes}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
