// const {clipboard, contextBridge, crashReporter, desktopCapturer, ipcRenderer, nativeImage, shell, webFrame, deprecate} =e. require('electron');
// import { Observable } from 'rxjs'
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'api',
  {
    getProjectName: async (callback) => {
        return new Promise((resolve,reject)=>{
            ipcRenderer.once('getProjectName', function(event, params){
                if(callback) callback(params);
                resolve(params);
            })
        })
        
    },
    get_books: (someArgument) => {
      return ipcRenderer.invoke('get_books', someArgument)
      // return new Observable(observer=>{
      //   const EVENT_NAME = ''
      //   const listener = (event, params)=>{

      //     observer.next(params);
      //   }

      //   ipcRenderer.send('subscribe', )
      //   ipcRenderer.on(EVENT_NAME, listener)
      //   return () => {
      //     ipcRenderer.removeListener(EVENT_NAME, listener)
      //   }
      // })
    },
    add_books:(someArgument)=>{
      return ipcRenderer.invoke('add_books', someArgument)
    }
  }
)