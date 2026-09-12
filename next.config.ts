import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/imhex/features/:path*",
        destination: "/imhex/misc/:path*",
        permanent: true,
      },
      {
        source: "/imhex/common",
        destination: "/imhex/common/input-text-boxes",
        permanent: true,
      },
      ...["imhex", "pattern-language"].map((space) => ({
        source: `/${space}/readme`,
        destination: `/${space}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
