import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sukanta | Fullstack Developer",
  description: "Transforming Ideas into Digital Success",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <!-- Google Tag Manager --> */}

      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N5NJBXRK');
    `}
        </Script>

        {/* Google Analytics Script Loader */}
        <Script
          id="ga-loader-script"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7P1QPY7F1"
        />

        {/* Google Analytics Config Script */}
        <Script id="ga-config-script" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z7P1QPY7F1');
    `}
        </Script>
      </head>

      {/* <!-- End Google Tag Manager --> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5NJBXRK"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
      </body>
    </html>
  );
}
