/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Placeholder assets di /public/images dibuat sebagai SVG.
    // Aman diaktifkan karena file berasal dari proyek sendiri (bukan upload pengguna).
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
