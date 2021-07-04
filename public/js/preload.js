// const {clipboard, contextBridge, crashReporter, desktopCapturer, ipcRenderer, nativeImage, shell, webFrame, deprecate} =e. require('electron');
// const { ipcRenderer } = require('electron');
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipcRenderer',
  {
    on: async (callback) => {
        return new Promise((resolve,reject)=>{
            ipcRenderer.on('ping', function(event, message){
                if(callback) callback(message);
                resolve(message);
            })
        })
        
    }
  }
)
// window.ipcRenderer = ipcRenderer
// Object.defineProperty(window, 'ipcRenderer', { writable: false })
// window.clipboard=e.clipboard
// window.contextBridge=e.contextBridge
// window.crashReporter=e.crashReporter
// window.desktopCapturer=e.desktopCapturer
// window.nativeImage=e.nativeImage
// window.shell=e.shell
// window.webFrame=e.webFrame
// window.deprecate=e.deprecate
// Object.freeze(window)
// console.log('window.ipcRenderer', window.ipcRenderer)