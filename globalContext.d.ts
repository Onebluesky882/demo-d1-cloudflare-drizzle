import type { Context } from "hono";

declare global {
  type Bindings = {
    DB: D1Database;
  };

  export type context = Context<{ Bindings: Bindings }>;
}
