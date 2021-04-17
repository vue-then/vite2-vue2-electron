// const { app, BrowserWindow } = require("electron");
// const createProtocol = require("./protocol");
// const isDevelopment = process.env.CVE_ENV === 'development'


// app.on('ready', () => {
//   let win = new BrowserWindow({
//     show: false,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })
//   win.on('ready-to-show', () => { win.show() })
//   if (isDevelopment) {
//     win.loadURL(`http://localhost:${process.env.CVE_PORT}`)
//   } else {
//     createProtocol('app')
//     win.loadURL('app://./index.html')
//   }
//   win.webContents.openDevTools()
// })
/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Set environment for development
process.env.NODE_ENV = 'development'

// Install `electron-debug` with `devtron`
// require('electron-debug')({ showDevTools: true })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  // require("devtron").install();
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.VUEJS_DEVTOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `vue-devtools`: \n', err)
    })
})

// Require `main` process to boot app
require('./index')
