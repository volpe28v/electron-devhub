const {app, BrowserWindow, ipcMain} = require('electron');

module.exports = class SettingWindow {
  constructor(){
    this.window = null;
    this.start();
  }

  start(){
    app.on('ready', () => {
      this.createWindow();
    });

    app.on('showSetting', (url) => {
      this.window.show();
    });
  }

  createWindow() {
    this.window = new BrowserWindow({
      x: 0,
      y: 0,
      width: 400,
      height: 300,
      show: true
    });

    this.window.on('close', (event) => {
      if (this.window.isVisible()){
        this.window.hide();
        event.preventDefault();
      }
    });

    this.window.loadURL(`file://${__dirname}/../../html/setting.html`);
  }
};
