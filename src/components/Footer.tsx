export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-hairline bg-surface px-16 pb-10 pt-20"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 font-display text-2xl font-semibold tracking-[3px] text-ink">
            AURÉLIA
          </div>
          <p className="max-w-[280px] text-sm font-light leading-[1.7] text-muted">
            Handcrafted fragrance from a single atelier in Grasse, France.
          </p>
        </div>
        <div>
          <div className="mb-[18px] text-[13px] font-medium tracking-[1.5px] text-ink">
            EXPLORE
          </div>
          <div className="flex flex-col gap-3">
            <a href="/#home" className="text-sm font-light text-muted no-underline">
              Home
            </a>
            <a href="/shop" className="text-sm font-light text-muted no-underline">
              Shop
            </a>
            <a
              href="/#collections"
              className="text-sm font-light text-muted no-underline"
            >
              Collections
            </a>
          </div>
        </div>
        <div>
          <div className="mb-[18px] text-[13px] font-medium tracking-[1.5px] text-ink">
            COMPANY
          </div>
          <div className="flex flex-col gap-3">
            <a href="/#about" className="text-sm font-light text-muted no-underline">
              About
            </a>
            <a
              href="/#contact"
              className="text-sm font-light text-muted no-underline"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <div className="mb-[18px] text-[13px] font-medium tracking-[1.5px] text-ink">
            CONTACT
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:maison@aurelia-parfums.com"
              className="text-sm font-light text-muted no-underline"
            >
              maison@aurelia-parfums.com
            </a>
            <span className="text-sm font-light text-muted">
              Grasse, France
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1240px] border-t border-hairline pt-6 text-xs font-light text-footnote">
        &copy; 2026 Aurélia Parfums. All rights reserved.
      </div>
    </footer>
  );
}
