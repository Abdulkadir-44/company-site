import type { Metadata } from "next";
import { newsreader, poppins } from "./lib/fonts/fonts";
import "./globals.css";
import { Providers } from "./providers";
import Script from "next/script";


export const metadata: Metadata = {
  title: "NebaSoftware",
  description: "NEBASOFTWARE, modern ve ölçeklenebilir yazılımlar geliştirerek işletmelerin dijital dönüşümünü destekliyor. Web, mobil ve özel yazılım çözümlerimizle işinizi güçlendirin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {
            `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID}');
            `
          }
        </Script>
      </head>
      <body className={`${newsreader.className}`}>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}`}
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
