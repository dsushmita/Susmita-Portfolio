import assert from 'node:assert/strict'
import { once } from 'node:events'
import test from 'node:test'
import { createApp } from './app.js'

test('profile API serves the portfolio data and health status', async (context) => {
  const server = createApp().listen(0)
  await once(server, 'listening')

  context.after(() => new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()))
  }))

  const address = server.address()
  assert.ok(address && typeof address === 'object')
  const baseUrl = `http://127.0.0.1:${address.port}`

  const profileResponse = await fetch(`${baseUrl}/api/profile`)
  assert.equal(profileResponse.status, 200)

  const body = await profileResponse.json()
  assert.equal(body.name, 'Susmita Dhital')
  assert.equal(body.experience[0].company, 'PortPro')
  assert.ok(body.skills.some((group) => group.items.includes('React')))
  assert.equal(body.featuredSkills.length, 6)
  assert.equal(body.projects.length, 3)

  const healthResponse = await fetch(`${baseUrl}/api/health`)
  assert.deepEqual(await healthResponse.json(), { status: 'ok' })
})
