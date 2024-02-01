import { db } from "./src/db/db";
import { UserSchema } from "./src/db/schemas/user.schema";

console.log(await db.delete(UserSchema))