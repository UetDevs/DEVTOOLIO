export const CONSENT_KEY = "devtoolio-cookie-consent";
export const OPEN_CONSENT_EVENT = "devtoolio:open-consent";

export type ConsentChoice = "accepted" | "essential";

/** Set to "true" once Google's Privacy & messaging CMP is published in AdSense, so only one consent prompt shows. */
export const googleCmpEnabled = process.env.NEXT_PUBLIC_GOOGLE_CMP === "true";

/**
 * Runs in <head> before any ad request. Google ads stay non-personalized until the visitor
 * accepts advertising cookies. Must stay in sync with CONSENT_KEY.
 */
export const consentBootstrapScript = `try{if(localStorage.getItem(${JSON.stringify(CONSENT_KEY)})!=='accepted'){(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1}}catch(e){(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1}`;
