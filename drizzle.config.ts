import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  out: "./drizzle",
  driver: "d1-http",
  dbCredentials: {
    accountId: "6a041dfe24d207d6638700bb76b02118",
    databaseId: "5a8d8c3c-eb1e-4f86-990a-bb1c60a68d5c",
    token: "6T9z32fCnOj6vvAOaJwVFtUFP2Oz12iR1uDUeGGc",
  },
});
