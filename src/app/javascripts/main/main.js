const {app} = require('electron');
const SettingWindow = require('./setting-window');
const DevHubWindow = require('./devhub-window');
const AppMenu = require('./app-menu');

class Main {
  constructor() {
    this.settingWindow = new SettingWindow();
    this.devhubWindow = new DevHubWindow();

    this.start();
  }

  start(){
    app.on('ready', () => {
      AppMenu.setup();
    });

    app.on("window-all-closed", function(){
      app.quit();
    });
  }
}

const main = new Main();
