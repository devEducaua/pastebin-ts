import { Context } from "hono/dist/types/context";
import sql from "./db";
import { randomUUIDv7 } from "bun";

export async function copyController(c: Context) {
    const uuid = c.req.param('uuid');

    const content = await sql`SELECT content, type FROM pastes WHERE id = ${uuid}`;

    return c.json(content);
}

export async function pasteController(c: Context) {
    const { content, type } = await c.req.json();

    const id = randomUUIDv7();
    await sql`INSERT INTO pastes (id, content, type) VALUES (${id}, ${content}, ${type})`;

    c.status(201);
    return c.json({ Pastebin: "content saved successfully" });
}
