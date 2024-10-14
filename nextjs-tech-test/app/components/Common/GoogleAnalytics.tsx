"use client";
import React from 'react'
// Google Analytic Logic
import { useEffect } from 'react';
import Script from 'next/script'; // Correct import for Script
import { usePathname } from 'next/navigation'; // Use usePathname to track page changes

const GoogleAnalytics = () => {
  
  const pathname = usePathname(); // Get the current pathname
  const gaCode = process.env.NEXT_PUBLIC_GA_CODE || '';
  useEffect(() => {
    const handleGtag = () => {
      if (window.gtag) {
        if (gaCode) {
          window.gtag('config', gaCode, {
            page_path: pathname,
          });
        } else {
          console.warn('GA Code is not defined');
        }
      }
    };

    handleGtag();
  }, [pathname,gaCode]);
  return (
    <div>
      {/* Google Analytics Setup */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaCode}`}
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${gaCode.toString()}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </div>
  )
}

export default GoogleAnalytics
