export function ImageSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
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
