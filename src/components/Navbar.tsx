"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/#collections" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  // Only the homepage has a full-bleed hero carousel behind the bar, so
  // only there does it make sense to start transparent-with-light-text.
  // Every other page starts (and stays) in the solid/dark-text state to
  // guarantee contrast regardless of what that page's top content is.
  const isHome = pathname === "/";
  const { scrollY, scrollYProgress } = useScroll();

  const bgAlpha = useTransform(scrollY, [0, 90], isHome ? [0.08, 0.88] : [0.9, 0.9]);
  const blurPx = useTransform(scrollY, [0, 90], isHome ? [10, 18] : [18, 18]);
  const borderAlpha = useTransform(scrollY, [0, 90], isHome ? [0, 0.18] : [0.18, 0.18]);
  const shadowAlpha = useTransform(scrollY, [0, 90], isHome ? [0, 0.22] : [0.22, 0.22]);
  const paddingY = useTransform(scrollY, [0, 90], [26, 16]);
  const logoScale = useTransform(scrollY, [0, 90], [1, 0.9]);
  // Cream while floating over the hero (so text reads against every
  // carousel slide's wine-tinted overlay), wine once the bar goes solid.
  const textColor = useTransform(
    scrollY,
    [0, 90],
    isHome ? ["#F5F5DC", "#722E37"] : ["#722E37", "#722E37"]
  );
  const textShadow = useTransform(
    scrollY,
    [0, 90],
    isHome
      ? ["0 1px 12px rgba(0,0,0,0.25)", "0 0px 0px rgba(0,0,0,0)"]
      : ["0 0px 0px rgba(0,0,0,0)", "0 0px 0px rgba(0,0,0,0)"]
  );

  const background = useMotionTemplate`rgba(245,245,220,${bgAlpha})`;
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;
  const borderBottom = useMotionTemplate`1px solid rgba(114,46,55,${borderAlpha})`;
  const boxShadow = useMotionTemplate`0 8px 30px -18px rgba(114,46,55,${shadowAlpha})`;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 sm:px-10 md:px-16"
        style={{
          background,
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
          borderBottom,
          boxShadow,
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
      >
        <motion.a
          href="/#home"
          style={{ scale: logoScale, color: textColor, textShadow }}
          className="origin-left font-display text-[24px] font-semibold tracking-[3px] no-underline sm:text-[26px]"
        >
          AURÉLIA
        </motion.a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              style={{ color: textColor, textShadow }}
              className="group relative font-nav text-[13px] font-medium tracking-[1.2px] no-underline"
            >
              {link.label.toUpperCase()}
              <span
                className="absolute -bottom-1.5 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 ease-out group-hover:w-full"
                aria-hidden="true"
              />
            </motion.a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="relative z-[110] flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <motion.span
            className="h-[1.5px] w-6"
            style={{ backgroundColor: menuOpen ? "#722E37" : textColor }}
            animate={
              menuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
          <motion.span
            className="h-[1.5px] w-6"
            style={{ backgroundColor: menuOpen ? "#722E37" : textColor }}
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-[1.5px] w-6"
            style={{ backgroundColor: menuOpen ? "#722E37" : textColor }}
            animate={
              menuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        </button>
      </motion.nav>

      <motion.div
        className="fixed left-0 right-0 top-0 z-[101] h-[2px] origin-left bg-gold"
        style={{ scaleX: scrollYProgress }}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] md:hidden"
            style={{
              background: "rgba(245,245,220,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
                  className="font-nav text-2xl font-semibold tracking-[1.5px] text-ink no-underline"
                >
                  {link.label.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
