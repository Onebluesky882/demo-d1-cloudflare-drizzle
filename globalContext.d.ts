import type { Context } from "hono";

declare global {
  type Bindings = {
    DB: D1Database;
    Allow_url01: string;
    Allow_url02: string;
  };

  export type context = Context<{ Bindings: Bindings }>;
}
