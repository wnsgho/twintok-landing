import type { NextConfig } from "next";

// GitHub Pages: 프로젝트 사이트면 '/twintok-landing', 커스텀 도메인이면 '' 로 변경
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true, // GitHub Pages는 정적 호스팅이라 이미지 최적화 불가
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
      },
    ],
  },
};

export default nextConfig;
