import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("custom_header", "Hello");
    return resp;
  },
};

export default function Example() {
  return (
    <main>
      <h1>Example</h1>
      <p>Example Page</p>
    </main>
  );
}
