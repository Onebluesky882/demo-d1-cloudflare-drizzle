//

wrangler login

## create DB d1 cloudflare

wrangler d1 create demo-sqlite-d1-drizzle

### link with worker

To access your new D1 Database in your Worker, add the following snippet to your configuration file:
wrangler.toml
[[d1_databases]]
binding = "demo_sqlite_d1_drizzle"
database_name = "demo-sqlite-d1-drizzle"
database_id = "5a8d8c3c-eb1e-4f86-990a-bb1c60a68d5c"





### create post table

make sure you are create path : demo-sqlite-d1-drizzle/migrations
commend : wrangler d1 migrations apply DB --remote

### run local

wrangler dev --remote

### build to cloudflare

wrangler deploy
