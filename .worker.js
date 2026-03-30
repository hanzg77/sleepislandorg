// Static assets only — no Worker logic needed
export default {
  async fetch(request, env) {
    return new Response("Not found", { status: 404 });
  }
};
