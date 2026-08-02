import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const baseUrl = host ? `${protocol}://${host}` : "https://example.com";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Your Name — Academic Homepage",
      template: "%s — Your Name",
    },
    description:
      "Academic homepage for an AI researcher working on multimodal learning, large language models, and trustworthy AI.",
    openGraph: {
      title: "Your Name — Academic Research Portfolio",
      description:
        "Multimodal AI, language models, and trustworthy systems.",
      type: "website",
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1680,
          height: 945,
          alt: "Your Name academic research portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Name — Academic Research Portfolio",
      description:
        "Multimodal AI, language models, and trustworthy systems.",
      images: [`${baseUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
