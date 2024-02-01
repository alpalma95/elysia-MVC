import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { sql } from "drizzle-orm";

const sqlite = new Database("./src/db/db.db");
const db = drizzle(sqlite);
migrate(db, { migrationsFolder: "./src/db/migrations" });