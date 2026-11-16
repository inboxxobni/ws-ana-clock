/** A world clock: a widget on the home page and a page at /ws-ana-clock. Uses only the router and the home page, so any ACRYL app can load it. */
import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

export const name = 'ws-ana-clock'
export const inject = ['router', 'home']

const zones = ['Europe/Vienna', 'America/New_York', 'Asia/Tokyo']
const table = () => zones.map((z) => `<li>${z}: <b>${new Date().toLocaleTimeString('en-GB', { timeZone: z })}</b></li>`).join('')

export function apply(ctx: Context): void {
  ctx.router.route('/', new Acryl().get('/ws-ana-clock', (c) => c.html(`<!doctype html><title>World clock</title><h1>World clock</h1><ul>${table()}</ul>`)))
  ctx.effect(() => ctx.home.widget({ id: 'ws-ana-clock', title: 'World clock (by Ana)', render: () => `<ul>${table()}</ul><a href="/ws-ana-clock">Open</a>` }))
}
