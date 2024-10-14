//
import React from "react";
// Import the Metadata type from Next.js
import type { Metadata } from "next";
// Import font variables from the utils file
import { montserrat, roboto } from "./utils/fonts";
// Import global CSS styles
import "./globals.css";
//import google nalytics component
import GoogleAnalytics from "./components/Common/GoogleAnalytics";
//import Schema component
import SchemaMarkup from "./components/Common/SchemaMarkup";




// Create metadata tags for the application

export const metadata: Metadata = {
  title: "Dreamshare: Share Your Holiday Dream And Find A Partner", // Title of the page
  description:
    "Find the perfect partner for your holiday dream with Dreamshare. Share your travel aspirations and connect with like-minded adventurers.",
  keywords:
    "Share your ultimate holiday vision, find the perfect partner, bring it to life, explore opportunities, transform your dream vacation, reality, ideal companion, travel partner, vacation planning, adventure, explore, like-minded people, community, social network, Ultimate holiday vision, Perfect travel partner, Dream vacation companion, Transform vacation dreams, Ideal holiday companion, Share holiday vision, Find vacation partner, Dream trip transformation, Ideal vacation match, Explore holiday opportunities, Ultimate travel experience, Vacation planning partner, Perfect holiday match, Dream vacation reality, Find your travel companion",
  icons: {
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://nextjs-tech.vercel.app", // Define the canonical URL here
  },
  openGraph: {
    title: "Dreamshare",
    description:
      "Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.",
    siteName: "Dreamshare",
    url: "https://nextjs-tech.vercel.app",
    images: [
      {
        url: "images/opengraph/open-graph.jpg", // Assuming the image is in the public folder
        width: 1200,
        height: 630,
        alt: "Dreamshare Og Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamshare",
    description:
      "Share your ultimate holiday vision and find the perfect partner to bring it to life. Explore opportunities to transform your dream vacation into reality with the ideal companion.",
    images: "images/opengraph/open-graph.jpg",
  },
};

// Export the RootLayout component as the default export
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  // Return the JSX structure for rendering the root layout
  return (
    <html lang="en">
      
      <body
        // Set the body element's width to 100%, background color to white, and overflow style to hidden
        className={`w-full bg-white overflow-hiddden ${montserrat} ${roboto}`}
      >
        {/* Render the children content within the body element */}
        {children}
        <SchemaMarkup/>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
