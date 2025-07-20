import { serve } from "@hono/node-server";
import { Hono } from "hono";
import config from "./payload.config.js";
import { getPayload } from "payload";

const payload = await getPayload({
  config,
});

const app = new Hono();

app.get("/", async (c) => {
  const now = Date.now();
  payload.logger.info(`${Date.now() - now}MS`);
  const posts = await payload.find({
    collection: "posts",
  });

  return c.json(posts);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
