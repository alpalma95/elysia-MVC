import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schemas/*",
  out: "./src/db/migrations",

} satisfies Config;