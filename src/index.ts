import { Hono } from "hono";
import { cors } from "hono/cors";
import {
  deletePost,
  editPost,
  getPostById,
  getPosts,
  newPost,
} from "./posts/service";

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "/api/*",
  cors({
    origin: [process.env.WEB01!, process.env.WEB02!, process.env.WEB03!],
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  })
);
app.get("/", c => {
  return c.text("Hello Hono!");
});
// get
app.get("/posts", getPosts);
app.get("/post/:id", getPostById);

// post
app.post("/post", newPost);

// edit
app.patch("post/:id", editPost);

// delete
app.delete("post/:id", deletePost);
export default app;
