import type { NextConfig } from "next";

const s3PublicUrl = process.env.NEXT_PUBLIC_S3_PUBLIC_URL || "";
const s3Url = s3PublicUrl ? new URL(s3PublicUrl) : null;
const s3Hostname = s3Url ? s3Url.hostname : "";
const s3Protocol = s3Url ? s3Url.protocol.replace(":", "") : "https";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  images: {
    unoptimized: true,
    qualities: [65, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};


export default nextConfig;
