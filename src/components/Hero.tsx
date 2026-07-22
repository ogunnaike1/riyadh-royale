"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";

const textVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -dir * 40 }),
};

const bottleVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 50, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: -dir * 50, scale: 0.96 }),
};

type Slide = {
  id: string;
  label: string;
  headline: string[];
  tagline: string;
  bgSrc: string;
  bgPosition: string;
  bottleSrc: string;
  bottlePosition: string;
};

const SLIDES: Slide[] = [
  {
    id: "marble",
    label: "New Arrival",
    headline: ["Timeless Elegance", "in Every Drop"],
    tagline:
      "A curated collection of rare essences, composed for those who wear elegance as a signature.",
    bgSrc:
      "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=1800&q=80&auto=format&fit=crop",
    bgPosition: "center",
    bottleSrc:
      "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=900&q=80&auto=format&fit=crop",
    bottlePosition: "70% 50%",
  },
  {
    id: "water",
    label: "Signature Scent",
    headline: ["Where Light Meets", "Fragrance"],
    tagline:
      "Composed like still water — quiet on the surface, endlessly deep beneath.",
    bgSrc:
      "https://images.unsplash.com/photo-1534525062064-6c7148b842e9?w=1800&q=80&auto=format&fit=crop",
    bgPosition: "center 60%",
    bottleSrc:
      "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?w=900&q=80&auto=format&fit=crop",
    bottlePosition: "50% 55%",
  },
  {
    id: "gradient",
    label: "Limited Edition",
    headline: ["An Opulence", "Beyond Words"],
    tagline:
      "A once-a-season pour, bottled at the height of its craft. Once gone, gone for good.",
    bgSrc:
      "https://images.unsplash.com/photo-1779528589396-7e1466862273?w=1800&q=80&auto=format&fit=crop",
    bgPosition: "center",
    bottleSrc:
      "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=900&q=80&auto=format&fit=crop",
    bottlePosition: "40% 50%",
  },
  {
    id: "archway",
    label: "Iconic Heritage",
    headline: ["Crafted for the", "Extraordinary"],
    tagline:
      "Every bottle carries the weight of a single Grasse atelier and generations of craft.",
    bgSrc:
      "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?w=1800&q=80&auto=format&fit=crop",
    bgPosition: "center 40%",
    bottleSrc:
      "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?w=900&q=80&auto=format&fit=crop",
    bottlePosition: "50% 45%",
  },
  {
    id: "silk",
    label: "Pure Indulgence",
    headline: ["Wrapped in", "Quiet Luxury"],
    tagline:
      "Soft as the fabric it rests on — a fragrance meant to be felt, not announced.",
    bgSrc:
      "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=1800&q=80&auto=format&fit=crop",
    bgPosition: "center",
    bottleSrc:
      "https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?w=900&q=80&auto=format&fit=crop",
    bottlePosition: "70% 45%",
  },
];

const AUTOPLAY_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setDirection(next > index || (index === SLIDES.length - 1 && next === 0) ? 1 : -1);
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  const slide = SLIDES[index];

  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden"
    >
      {/* Background carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.09 }}
              transition={{ duration: AUTOPLAY_MS / 1000 + 1, ease: "linear" }}
            >
              <Image
                src={slide.bgSrc}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: slide.bgPosition }}
                className="blur-[2px]"
              />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(114,46,55,0.55) 0%, rgba(114,46,55,0.35) 45%, rgba(114,46,55,0.65) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 grid w-full max-w-[1240px] grid-cols-1 items-center gap-10 px-6 sm:px-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg p-8 sm:p-10"
            style={{
              background: "rgba(245,245,220,0.14)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(245,245,220,0.28)",
              boxShadow:
                "0 30px 60px -25px rgba(0,0,0,0.45), inset 0 1px 0 rgba(245,245,220,0.25)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{
                background: "rgba(160,82,45,0.22)",
                border: "1px solid rgba(245,245,220,0.35)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cream" />
              <span className="text-[11px] font-medium tracking-[2.5px] text-cream">
                {slide.label.toUpperCase()}
              </span>
            </motion.div>

            <h1 className="mb-6 font-display text-[42px] font-medium leading-[1.1] text-cream sm:text-[56px] md:text-[68px]">
              {slide.headline.map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-9 max-w-[440px] text-[16px] font-light leading-[1.7] text-cream/85 sm:text-[17px]"
            >
              {slide.tagline}
            </motion.p>

            <motion.a
              href="/shop"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 rounded-sm px-[34px] py-4 text-[13px] tracking-[2px] text-cream no-underline"
              style={{
                background: "rgba(139,21,57,0.55)",
                border: "1px solid rgba(139,21,57,0.9)",
                backdropFilter: "blur(6px)",
              }}
            >
              EXPLORE COLLECTION <span className="text-base">&#8594;</span>
            </motion.a>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id + "-bottle"}
            custom={direction}
            variants={bottleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto hidden w-full max-w-[380px] rounded-lg p-4 sm:block"
            style={{
              background: "rgba(245,245,220,0.16)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(245,245,220,0.3)",
              boxShadow:
                "0 40px 70px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(245,245,220,0.25)",
            }}
          >
            <motion.div
              className="w-full overflow-hidden rounded"
              style={{ aspectRatio: "3/4" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.04 }}
            >
              <Image
                src={slide.bottleSrc}
                alt="Aurélia perfume bottle"
                fill
                sizes="380px"
                style={{ objectFit: "cover", objectPosition: slide.bottlePosition }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full text-cream sm:left-6 sm:flex"
        style={{
          width: 44,
          height: 44,
          background: "rgba(245,245,220,0.14)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(245,245,220,0.3)",
        }}
      >
        &#8592;
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full text-cream sm:right-6 sm:flex"
        style={{
          width: 44,
          height: 44,
          background: "rgba(245,245,220,0.14)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(245,245,220,0.3)",
        }}
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:bottom-28">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === index ? 24 : 8,
              background:
                i === index ? "#F5F5DC" : "rgba(245,245,220,0.4)",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[3px]">SCROLL</span>
        <span className="text-lg">&#8595;</span>
      </motion.div>
    </section>
  );
}
