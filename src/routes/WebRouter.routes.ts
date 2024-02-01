import { Elysia } from "elysia";
import { HomeController } from "../controllers/Home.controller";
import { html } from "@elysiajs/html";

export const WebRouter = new Elysia()
WebRouter.use(html())
WebRouter.get('/', HomeController.index)