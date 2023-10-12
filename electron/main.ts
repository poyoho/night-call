import path from 'node:path'
import { app } from 'electron'
import { createContext } from './src/ctx'
import setupMenu from './src/menu'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')

async function bootstrap() {
  const ctx = await createContext()

  setupMenu(ctx)
}

bootstrap()
