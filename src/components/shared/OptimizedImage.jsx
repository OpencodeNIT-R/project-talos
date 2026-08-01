import { useState } from "react";
import { getOptimizedImageUrl } from "../../utils/imageOptimizer";

/**
 * Reusable Optimized Image Component
 * Handles Cloudinary auto-format/quality optimization, lazy loading, async decoding,
 * and smooth fade-in loading state.
 */
export default function OptimizedImage({
  src,
  alt = "",
  width,
  className = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  onError,
  onLoad,
  showSkeleton = true,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const optimizedSrc = getOptimizedImageUrl(src, { width });

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  if (hasError) {
    return (
      <div
        className={`bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 text-xs text-center p-2 ${className}`}
      >
        <span>{alt || "Image unavailable"}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Optional skeleton loader placeholder */}
      {showSkeleton && !isLoaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse z-0" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
}
