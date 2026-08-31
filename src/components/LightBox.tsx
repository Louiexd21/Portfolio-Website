import { useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, caption, onClose }: LightboxProps) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4 sm:p-8 animate-[fadeIn_0.2s_ease]"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-white transition-colors hover:border-accent hover:text-accent cursor-pointer"
      >
        <X size={20} />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center gap-4 max-w-5xl max-h-full"
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[80vh] max-w-full rounded-md object-contain shadow-[0_24px_64px_-16px_rgba(0,0,0,0.5)]"
        />
        {caption && (
          <figcaption className="text-center text-sm text-white/70 font-medium">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Lightbox;