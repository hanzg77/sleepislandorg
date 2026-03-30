const CANONICAL_HOST = 'www.sleepisland.org';
const ROOT_HOST = 'sleepisland.org';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === ROOT_HOST || (url.hostname === CANONICAL_HOST && url.protocol !== 'https:')) {
      url.protocol = 'https:';

      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 308);
    }

    return env.ASSETS.fetch(request);
  },
};
