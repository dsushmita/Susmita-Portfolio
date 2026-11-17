import express from 'express'
import { profile } from './profile.js'

export function createApp() {
  const app = express()

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok' })
  })

  app.get('/api/profile', (_request, response) => {
    response.json(profile)
  })

  return app
}
