// components/AnalyticsInitializer.tsx
import Script from "next/script";

export default function AnalyticsInitializer() {
  return (
    <Script
      id="gtag-consent-default"
      strategy="beforeInteractive"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
      `}
    </Script>
  );
}