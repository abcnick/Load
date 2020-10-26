const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: 900, height: 600,
    webPreferences: { nodeIntegration: true }
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.on( 'crashed', () => {

    setTimeout( () => {
      mainWindow.reload()
    }, 1000)
  })

  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})