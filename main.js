const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const env = require('./env')

let mainWindow

function fileURL(name) {
	if(process.env.NODE_ENV == 'development') {
		return `http://localhost:${env.port}/${name}`	
	} else {
		return `file://${__dirname}/${name}`
	}
}

function createWindow () {
  mainWindow = new BrowserWindow({width: 1536, height: 800})

  mainWindow.loadURL(fileURL("index.html"))
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
