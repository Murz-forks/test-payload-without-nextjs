import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
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
  editor: lexicalEditor(),
  db: mongooseAdapter({
    url: "mongodb://localhost:27017/hono-app-test",
  }),
});
