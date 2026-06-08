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

    // App Store redirect. The bare apps.apple.com/app/id<ID> link drops the app id on the
    // mainland-China storefront (it bounces to /cn/iphone/today), so China-store visitors
    // must get an explicit /cn/ link. Cloudflare's IP geo can disagree with Apple's (we saw
    // CF=JP while Apple=CN for the same IP), so IP country alone is unreliable. We instead
    // infer "Chinese-store visitor" primarily from the referring page's locale — a user on
    // the zh-Hans (prefix-less) site is overwhelmingly on the China store — and keep CF
    // country only as a secondary signal. Everyone else gets the bare link, which Apple
    // geo-routes to their own storefront (works for every non-China store, no mismatch).
    if (url.pathname === '/go/ios' || url.pathname === '/go/ios/') {
      const PREFIXED = ['en', 'zh-Hant', 'ja', 'ko', 'es', 'fr', 'de', 'pt', 'ru', 'ar', 'hi', 'vi', 'th', 'id'];
      let zhHansPage = false;
      try {
        const seg = new URL(request.headers.get('referer') || '').pathname.split('/')[1] || '';
        zhHansPage = !PREFIXED.includes(seg); // no language prefix === the simplified-Chinese site
      } catch (_) { /* missing or invalid referer — fall back to CF country below */ }
      const cfCountry = (request.cf?.country || request.headers.get('cf-ipcountry') || '').toLowerCase();
      if (zhHansPage || cfCountry === 'cn') {
        return Response.redirect(`https://apps.apple.com/cn/app/id${APP_ID}`, 302);
      }
      return Response.redirect(`https://apps.apple.com/app/id${APP_ID}`, 302);
    }

    return env.ASSETS.fetch(request);
  },
};
