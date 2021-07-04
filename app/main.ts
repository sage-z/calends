import { app, BrowserWindow } from 'electron';
import {is} from 'electron-util';
import * as path from 'path';
// require('./core/bootstrap')

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
const windows = [];


const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    // show: false,
    height: 800,
    width: 1280,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden',
    backgroundColor: '#2e2c29',
    webPreferences: {
        // nodeIntegration: true,
        // nodeIntegration: false, // is default value after Electron v5
        // contextIsolation: true, // protect against prototype pollution
        // enableRemoteModule: false,
        preload: path.join(process.cwd(), 'public/js/preload.js')
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // mainWindow.on('ready-to-show',()=>{
  //     mainWindow.show();
  // })

  // todo 暂时方案
  mainWindow.on('resize', () => {
    mainWindow.reload();
  })

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('ping', 'whoooooooh!');
  })
  // mainWindow['custom'] = {
  //     dbSuffix: 3223
  // };
  windows.push(mainWindow);
  // mainWindow.loadFile("index.html")
  // mainWindow.loadURL("http://localhost:3000/main_window");
  // Open the DevTools.
  if (is.development){
    mainWindow.webContents.openDevTools();
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.