import { useState } from "react";
import { motion } from "framer-motion";

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  loadingClass?: string;
}

const LoadingImage = ({
  src,
  alt,
  className = "",
  loadingClass = "",
}: LoadingImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 animate-pulse bg-[hsl(var(--primary)_/_0.1)] rounded-lg ${loadingClass}`}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LoadingImage;
