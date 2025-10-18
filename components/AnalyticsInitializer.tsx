// components/AnalyticsInitializer.tsx
'use client';

import { useEffect } from 'react';

export default function AnalyticsInitializer() {
  useEffect(() => {
    // Set default consent state on mount
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      console.log('🔒 Default consent set to denied');
    }
  }, []);

  return null;
}