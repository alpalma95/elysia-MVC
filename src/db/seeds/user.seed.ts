import { db } from "../db";
import { UserSchema } from "../schemas/user.schema";

const records = await db.insert(UserSchema).values([
    {
        name: "Al",
        surname: "Palma-Mancheño", 
        role: "admin"
    }, 
    {
        name: "Ro",
        surname: "Serrano-Piñar", 
        role: "admin"
    },
    {
        name: "Bruno",
        surname: "Gruno-Mancheño-Piñar",
        role: "pet"
    }
]).returning()

console.log(records)