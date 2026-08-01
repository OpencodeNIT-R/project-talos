/**
 * Utility to optimize image URLs, specifically Cloudinary hosted images,
 * by appending auto-format (f_auto), auto-quality (q_auto), and optional width constraints.
 */

/**
 * Optimizes a Cloudinary image URL by injecting f_auto, q_auto, and optional width parameters.
 * @param {string} url - The original image URL
 * @param {Object} options - Optimization options
 * @param {number} [options.width] - Optional target width in pixels
 * @param {number} [options.quality='auto'] - Quality level or 'auto'
 * @param {string} [options.format='auto'] - Format or 'auto'
 * @param {string} [options.crop='limit'] - Crop mode (e.g. 'limit', 'scale', 'fill')
 * @returns {string} The optimized image URL
 */
export function optimizeCloudinaryUrl(url, options = {}) {
  if (!url || typeof url !== "string") return url;

  // Only transform Cloudinary URLs
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }

  // If already contains optimization flags, return as is
  if (url.includes("f_auto") && url.includes("q_auto")) {
    return url;
  }

  const { width, quality = "auto", format = "auto", crop = "limit" } = options;

  const params = [`f_${format}`, `q_${quality}`];
  if (width && typeof width === "number") {
    params.push(`w_${width}`);
    params.push(`c_${crop}`);
  }

  const paramString = params.join(",");

  // Insert params immediately after '/upload/'
  return url.replace("/upload/", `/upload/${paramString}/`);
}

/**
 * Returns an optimized image URL for any image source (Cloudinary or local).
 * @param {string} url - Image source URL
 * @param {Object} options - Options for optimization
 * @returns {string} Optimized URL
 */
export function getOptimizedImageUrl(url, options = {}) {
  if (!url) return "";
  if (typeof url === "string" && url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryUrl(url, options);
  }
  return url;
}
