import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { HTTPException } from "hono/http-exception";
import { Post } from "../../type";
import { posts } from "../db/schema";
//get all post
export const getPosts = async (c: context) => {
  const db = drizzle(c.env.DB);
  const result = await db.select().from(posts).all();

  return c.json({ data: result });
};

// get by id
export const getPostById = async (c: context) => {
  const db = drizzle(c.env.DB);
  const id = Number(c.req.param("id"));

  try {
    const result = await db
      .select({ title: posts.title })
      .from(posts)
      .where(eq(posts.id, id));
    return c.json({ success: true, data: result });
  } catch (error) {
    throw new HTTPException(400, {
      message: "Bad request",
    });
  }
};

// create
export const newPost = async (c: context) => {
  const db = drizzle(c.env.DB);
  const body = await c.req.json<Post>();

  const filed = {
    title: body.title,
    content: body.content,
  };
  try {
    const insertResult = await db.insert(posts).values(filed).run();
    return c.json({
      success: true,
      data: insertResult,
    });
  } catch (error) {
    throw new HTTPException(400, {
      message: "Bad request",
    });
  }
};

// edit
export const editPost = async (c: context) => {
  const db = drizzle(c.env.DB);
  const id = Number(c.req.param("id"));
  const body = await c.req.json<Post>();
  const filed = {
    title: body.title,
    content: body.content,
  };
  try {
    const updated = await db
      .update(posts)
      .set(filed)
      .where(eq(posts.id, id))
      .returning();
    return c.json({ ok: true, post: updated });
  } catch (error) {
    throw new HTTPException(400, {
      message: "Bad request",
    });
  }
};

// delete
export const deletePost = async (c: context) => {
  const db = drizzle(c.env.DB);
  const id = Number(c.req.param("id"));

  try {
    await db.delete(posts).where(eq(posts.id, id));
    return c.json({ success: true, data: "deleted" });
  } catch (error) {
    throw new HTTPException(400, {
      message: "Bad request",
    });
  }
};
