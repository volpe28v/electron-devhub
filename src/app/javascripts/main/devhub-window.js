const {app, BrowserWindow, ipcMain} = require('electron');

module.exports = class DevHubWindow {
  constructor(){
    this.window = null;
    this.start();
  }

  start(){
    app.on('ready', () => {
      this.createWindow();
    });

    ipcMain.on('setUrl', (event,url) => {
      this.window.loadURL(url);
      this.window.show();
    });
  }

  createWindow() {
    this.window = new BrowserWindow({
      x: 0,
      y: 0,
      width: 1200,
      height: 800,
      show: false
    });

    /*
    this.window.loadURL(
      'http://dev-hub.herokuapp.com/'
    );
    */
  }
};
