how to

create project : bun create hono@latest [name]

add dependency
follow [https://orm.drizzle.team/docs/get-started/sqlite-new]

- bun add dotenv
- bun add drizzle-orm
- bun add -D drizzle-kit @types/bun
- bun add drizzle-orm @libsql/client dotenv
- bun add -D drizzle-kit tsx

setting drizzle.config.js

- wrangler d1 create my-db-name
