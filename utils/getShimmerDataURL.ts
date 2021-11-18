const shimmer = (
  width: number,
  height: number,
  backgroundColor: string,
  accent: string
): string => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${backgroundColor}" offset="10%" />
      <stop stop-color="${accent}80" offset="30%" />
      <stop stop-color="${backgroundColor}" offset="40%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${backgroundColor}" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string): string => {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
};

export const getShimmerDataURL = (
  width: number,
  height: number,
  backgroundColor: string,
  accent: string
): string => {
  return `data:image/svg+xml;base64,${toBase64(
    shimmer(width, height, backgroundColor, accent)
  )}`;
};
