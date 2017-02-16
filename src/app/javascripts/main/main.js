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
  }
}

const main = new Main();
