import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.twintok.site"),
  title: "Twintok - 크리에이터를 더 스마트하게!",
  description:
    "Twintok과 함께 당신의 콘텐츠 가치를 극대화하세요. 데이터 기반 성장을 돕는 크리에이터 필수 플랫폼.",
  openGraph: {
    title: "Twintok - 크리에이터를 더 스마트하게!",
    description:
      "Twintok과 함께 당신의 콘텐츠 가치를 극대화하세요. 데이터 기반 성장을 돕는 크리에이터 필수 플랫폼.",
    url: "https://www.twintok.site",
    siteName: "Twintok",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Twintok - 크리에이터를 더 스마트하게!",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twintok - 크리에이터를 더 스마트하게!",
    description:
      "Twintok과 함께 당신의 콘텐츠 가치를 극대화하세요. 데이터 기반 성장을 돕는 크리에이터 필수 플랫폼.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
