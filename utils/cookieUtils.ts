// utils/cookieUtils.ts
import Cookies from 'js-cookie';
import { COOKIE_NAME, CookieConsentValue } from '@/configurations/constants';

export const COOKIE_EXPIRY_DAYS = 365; // 1 year

/**
 * Get the current cookie consent value
 */
export const getCookieConsent = (): CookieConsentValue => {
  const value = Cookies.get(COOKIE_NAME);
  if (value === 'accepted' || value === 'rejected') {
    return value;
  }
  return undefined;
};

/**
 * Set cookie consent value
 */
export const setCookieConsent = (value: 'accepted' | 'rejected'): void => {
  Cookies.set(COOKIE_NAME, value, {
    expires: COOKIE_EXPIRY_DAYS,
    sameSite: 'strict',
    path: '/',
  });

  // Trigger analytics based on consent
  if (value === 'accepted') {
    enableAnalytics();
  } else {
    disableAnalytics();
  }
};

/**
 * Check if user has made a consent choice
 */
export const hasCookieConsent = (): boolean => {
  return getCookieConsent() !== undefined;
};

/**
 * Delete cookie consent (for testing/reset)
 */
export const deleteCookieConsent = (): void => {
  Cookies.remove(COOKIE_NAME);
  disableAnalytics();
  console.log('🗑️ Cookie consent deleted');
};

/**
 * Enable analytics and tracking
 */
export const enableAnalytics = (): void => {
  console.log('✅ Analytics ENABLED');

  // Google Analytics (gtag.js)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    console.log('✅ Google Analytics consent granted');
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'cookie_consent_granted',
    });
    console.log('✅ GTM event pushed');
  }

  // Add other analytics services here
  // Example: Facebook Pixel, Hotjar, etc.
};

/**
 * Disable analytics and tracking
 */
export const disableAnalytics = (): void => {
  console.log('❌ Analytics DISABLED');

  // Google Analytics (gtag.js)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    console.log('❌ Google Analytics consent denied');
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'cookie_consent_denied',
    });
    console.log('❌ GTM event pushed');
  }
};

/**
 * Get all cookies for debugging
 */
export const getAllCookies = (): Record<string, string> => {
  return Cookies.get();
};