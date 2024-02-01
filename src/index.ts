import { Elysia } from "elysia";
import { WebRouter } from "./routes/WebRouter.routes";

const app = new Elysia()
  .mount(WebRouter)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

