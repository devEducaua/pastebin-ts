import { SQL } from "bun";

const sql = new SQL({
    url: Bun.env.DB_URL
})

await sql`
CREATE TABLE IF NOT EXISTS pastes (
    id TEXT NOT NULL,
    content TEXT NOT NULL,
    type TEXT NOT NULL
);
`

export default sql;
