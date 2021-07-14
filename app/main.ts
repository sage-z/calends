import { app, BrowserWindow } from 'electron';
import {is} from 'electron-util';
import * as path from 'path';
import { take } from 'rxjs/operators';
import { Books } from './database/store';
import './core/bootstrap'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
const windows = [];


const createWindow = (name?: string): void => {
  const win = new BrowserWindow({
    frame: false,
    // show: false,
    height: 800,
    width: 1280,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hidden',
    backgroundColor: '#2e2c29',
    webPreferences: {
        preload: path.join(process.cwd(), 'public/js/preload.js')
    }
  });

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // win.on('ready-to-show',()=>{
  //     win.show();
  // })

  // todo 暂时方案
  win.on('resize', () => {
    win.reload();
  })

  win.webContents.on('did-finish-load', () => {
    win.webContents.send('getProjectName', name);
  })
  
  windows.push(win);
  
  if (is.development){
    win.webContents.openDevTools();
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async ()=>{
  // const db = await getDatabase()
  console.log('Books.store', Books.store)
// db.books.find().$.subscribe(books => {
//       console.log('main', books.length)
//   });

// const sub = db.books.find({ selector: {open: 1} }).$.pipe(take(1)).subscribe(books => {
//     console.log('main', books.length)
//     if(books.length){
//       books.forEach(doc => createWindow(doc.name));
//     } else {
      createWindow()
//     }
//     sub.unsubscribe();
// });


  // db.books.find({ selector: {open: 1} }).$.subscribe(books => {
  //   console.log('### got books(' + books.length + '):');
  //   // if(books.length){
  //   //   books.forEach(doc => createWindow(doc.name));
  //   // } else {
  //     createWindow()
  //   // }
  // });
});



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