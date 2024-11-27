import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

export default buildConfig({
  collections: [
    {
      slug: "posts",
      fields: [
        {
          type: "text",
          name: "text",
        },
      ],
    },
  ],
  secret: "SECRET",
  db: mongooseAdapter({
    url: "mongodb://localhost:27017/hono-app-test",
  }),
});
