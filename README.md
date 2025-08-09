# Pastebin
Simple implementation of a Pastebin service in Typescript with hono/tiny.

## Dependencies
- Bun
- Hono

## Routes
| endpoint | method | function                    |
| -------- | ------ | --------------------------- |
| /paste   | POST   | put a content               |
| /copy/id | GET    | get content based on the id |

## examples
```json
{
    "content": "Hello World",
    "type": "text"
}

{
    "content": "print('Hello World')",
    "type": "lua"
}
```
