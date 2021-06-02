const {clipboard, contextBridge, crashReporter, desktopCapturer, ipcRenderer, nativeImage, shell, webFrame, deprecate} = require('electron');

window.clipboard=clipboard
window.contextBridge=contextBridge
window.crashReporter=crashReporter
window.desktopCapturer=desktopCapturer
window.ipcRenderer=ipcRenderer
window.nativeImage=nativeImage
window.shell=shell
window.webFrame=webFrame
window.deprecate=deprecate