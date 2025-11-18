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

## 📁 โครงสร้างโปรเจกต์

src/
├── index.ts # main Hono app
└── posts/
├── schema.ts # drizzle schema
└── service.ts # CRUD logic

drizzle/
└── migrations/ # drizzle migrations

package.json
wrangler.toml
README.md

---

## ⚙️ การติดตั้ง

### 1. Clone และติดตั้ง dependencies

```bash
git clone https://github.com/yourname/demo-d1-cloudflare-drizzle
cd demo-d1-cloudflare-drizzle
bun install
```
