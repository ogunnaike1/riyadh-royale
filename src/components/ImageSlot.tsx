import Image from "next/image";

export function ImageSlot({
  label,
  className = "",
  src,
  objectPosition = "center",
}: {
  label: string;
  className?: string;
  src?: string;
  objectPosition?: string;
}) {
  if (src) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 340px"
          style={{ objectFit: "cover", objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,rgba(114,46,55,0.05)_0px,rgba(114,46,55,0.05)_12px,rgba(114,46,55,0.1)_12px,rgba(114,46,55,0.1)_24px)] ${className}`}
    >
      <span className="px-6 text-center font-body text-xs font-light tracking-wide text-muted/70">
        {label}
      </span>
    </div>
  );
}
