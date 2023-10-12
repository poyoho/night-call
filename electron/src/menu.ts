import { Menu } from 'electron'
import type { Context } from './ctx'

export default function createMenu(ctx: Context) {
  const { tray, win } = ctx

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '打开',
      click() {
        ctx.win?.show()
      },
    },
  ])

  tray!.setContextMenu(contextMenu)
  tray!.on('click', () => {
    toggleVisitable()
  })

  function toggleVisitable() {
    win?.isVisible() ? win?.hide() : win?.show()
  }

  function updateMenu() {
    tray!.setContextMenu(contextMenu)
  }

  return {
    updateMenu,
  }
}
