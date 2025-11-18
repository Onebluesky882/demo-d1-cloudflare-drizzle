import { defineConfig } from "drizzle-kit";

/* 
important!
 CLOUDFLARE_ACCOUNT_ID=6a041dfe24d207d6638700bb76b02118
 CLOUDFLARE_DATABASE_ID=b052f394-230a-45f8-9a45-4588555f719e
 CLOUDFLARE_D1_TOKEN=6T9z32fCnOj6vvAOaJwVFtUFP2Oz12iR1uDUeGGc
*/
export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  out: "./drizzle",
  driver: "d1-http",
  dbCredentials: {
    accountId: "6a041dfe24d207d6638700bb76b02118",
    databaseId: "b052f394-230a-45f8-9a45-4588555f719e",
    token: "6T9z32fCnOj6vvAOaJwVFtUFP2Oz12iR1uDUeGGc",
  },
});
