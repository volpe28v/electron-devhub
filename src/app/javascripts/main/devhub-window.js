const {app, BrowserWindow} = require('electron');

module.exports = class DevHubWindow {
  constructor(){
    this.window = null;
    this.start();
  }

  start(){
    app.on('ready', () => {
      this.createWindow();
    });
  }

  createWindow() {
    this.window = new BrowserWindow({
      x: 0,
      y: 0,
      width: 1200,
      height: 800
    });

    this.window.loadURL(
      'http://dev-hub.herokuapp.com/'
    );
  }
};
