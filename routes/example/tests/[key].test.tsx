import { createHandler, ServeHandlerInfo } from "$fresh/server.ts";
import manifest from "../../../fresh.gen.ts";
import { assertEquals } from "$std/testing/asserts.ts";

const CONN_INFO: ServeHandlerInfo = {
  remoteAddr: { hostname: "127.0.0.1", port: 53496, transport: "tcp" },
};

Deno.test("routes.example/tests/[key]", () => {
  Deno.test("should status is 200 ", async () => {
    const handler = await createHandler(manifest);
    const actual = await handler(new Request("http://127.0.0.1"), CONN_INFO);
    const sut = 200;

    assertEquals(actual.status, sut);
  });
});
