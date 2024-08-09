import { Hono } from "hono";

import { handle } from "hono/vercel";
import accounts from "./accounts";
export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("/accounts", accounts);
// app
//   .get("hello", (c) => {
//     return c.json({
//       message: "hello world",
//     });
//   })
//   .get("/users", (c) => {
//     return c.text("users");
//   })
//   .get("/user/:id", (c) => {
//     const id = c.req.param("id");
//     const name = c.req.query("name");
//     return c.json({ "user id:": id, name: name });
//   });

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
