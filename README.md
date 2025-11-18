# 🌩️ demo-d1-cloudflare-drizzle

### Cloudflare Workers + D1 + Drizzle ORM + Hono — Demo CRUD API

![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)
![D1](https://img.shields.io/badge/DB-D1-blue?logo=sqlite&logoColor=white)
![Drizzle](https://img.shields.io/badge/ORM-Drizzle-4B8BBE?logo=typescript&logoColor=white)
![Hono](https://img.shields.io/badge/Framework-Hono-000000?logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white)

โปรเจกต์สาธิตสำหรับการสร้าง REST API บน **Cloudflare Workers** โดยใช้ **Hono** เป็น Web Framework + **D1 (SQLite)** และ **Drizzle ORM** สำหรับจัดการ Database

---

## 📌 Features

- CRUD API สำหรับจัดการ Posts
- ใช้ Drizzle ORM + Drizzle Kit migrations
- Cloudflare D1 ในตัว (SQLite-based)
- รองรับ CORS แบบกำหนด Domain
- โครงสร้างสะอาด พร้อมขยายโปรเจกต์

---

## 📁 Project Structure

demo-d1-cloudflare-drizzle/
├─ src/
│ ├─ index.ts # Main Hono app
│ └─ posts/
│ ├─ schema.ts # Drizzle schema
│ └─ service.ts # CRUD logic
│
├─ drizzle/
│ └─ migrations/ # Drizzle migrations
│
├─ package.json
├─ wrangler.toml
└─ README.md

---

## ⚙️ การติดตั้ง

### 1. Clone และติดตั้ง dependencies

```bash
git clone git@github.com:Onebluesky882/demo-d1-cloudflare-drizzle.git
cd demo-d1-cloudflare-drizzle
bun install
```

## package.json

```json
{
  "name": "demo-sqlite-d1-drizzle",
  "type": "module",
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy --minify",
    "cf-typegen": "wrangler types --env-interface CloudflareBindings"
  },
  "dependencies": {
    "@cloudflare/workers-types": "^4.20251118.0",
    "@libsql/client": "^0.15.15",
    "dotenv": "^17.2.3",
    "drizzle-orm": "^0.44.7",
    "hono": "^4.10.6"
  },
  "devDependencies": {
    "drizzle-kit": "^0.31.7",
    "tsx": "^4.20.6",
    "wrangler": "^4.4.0"
  }
}
```
