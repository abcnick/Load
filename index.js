const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let mainWindow

function createWindow () {

 mainWindow = new BrowserWindow({
     
     width: 1000, height: 800,
     minWidth: 450, minHeight: 500,
     maxWidth: 1390, maxHeight: 900,
    
     


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

/*
const template = [
  {
    label: 'CUR',
     submenu: [
        {
          label: 'Cortar',
           role: 'cut'
        },
        {
          label: 'No se cual ',
           role: 'undo'
        },
        {
          label: 'Rehacer',
           role: 'redo'
        },
        {
          label: 'Salir',
           role: 'close'
        }
     ]
    }
]
*/
/*
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
app.on('ready', createWindow)
*/

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

