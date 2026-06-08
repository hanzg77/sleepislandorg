const CANONICAL_HOST = 'www.sleepisland.org';
const ROOT_HOST = 'sleepisland.org';
const APP_ID = '6747609991';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === ROOT_HOST || (url.hostname === CANONICAL_HOST && url.protocol !== 'https:')) {
      url.protocol = 'https:';

      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 308);
    }

    // Geo-aware App Store redirect. The bare apps.apple.com/app/id<ID> link drops the
    // app id for some storefronts (e.g. CN bounces to /cn/iphone/today), so we send each
    // visitor to a country-coded link built from their Cloudflare-detected region.
    // Cloudflare emits XX (unknown) / T1 (Tor) and a few ISO regions have no App Store;
    // those fall back to the US storefront.
    if (url.pathname === '/go/ios' || url.pathname === '/go/ios/') {
      const NO_STORE = new Set(['xx', 't1', 'cu', 'ir', 'kp', 'sy']);
      const detected = (request.cf?.country || request.headers.get('cf-ipcountry') || 'US').toLowerCase();
      const country = (/^[a-z]{2}$/.test(detected) && !NO_STORE.has(detected)) ? detected : 'us';
      return Response.redirect(`https://apps.apple.com/${country}/app/id${APP_ID}`, 302);
    }

    return env.ASSETS.fetch(request);
  },
};
