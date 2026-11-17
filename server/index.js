import { createApp } from './app.js'

const port = Number(process.env.PORT ?? 3001)

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid PORT value: ${process.env.PORT}`)
}

createApp().listen(port, () => {
  console.log(`Profile API listening on http://localhost:${port}`)
})
