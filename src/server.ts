import { Hono } from 'hono/quick'
import { copyController, pasteController } from './controller'

const app = new Hono()

app.get('/copy/:uuid', async (c) => {
    return copyController(c);
})

app.post('/paste', async (c) => {
    return pasteController(c);
})

export default { 
    fetch: app.fetch,
    port: 8080
}
