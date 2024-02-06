import { Elysia } from "elysia";
import { HomeController } from "../controllers/Home.controller";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

export const WebRouter = new Elysia();
WebRouter.use(html());
WebRouter.use(staticPlugin({ assets: "public", prefix: "" }));
WebRouter.get("/", HomeController.index);
