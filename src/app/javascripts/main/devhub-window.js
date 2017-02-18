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
      this.window.show();
      this.window.loadURL(url);
    });
  }

  createWindow() {
    this.window = new BrowserWindow({
      x: 0,
      y: 0,
      width: 1200,
      height: 800,
      //show: false
    });

    // 最初から show: false にすると、ブログリンクからウインドウが表示されないので hide() を使う
    this.window.hide();
  }
};
