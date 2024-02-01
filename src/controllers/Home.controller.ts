import { Context } from "elysia";
import Home from "../views/pages/Home";
import { db } from "../db/db";
import { UserSchema } from "../db/schemas/user.schema";

export const HomeController = {

    async index(ctx: Context) {
        
        const users = await db.select().from(UserSchema)
        return Home({users: users})
    }


};