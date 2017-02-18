const ko = require('knockout');
const {ipcRenderer} = require('electron');

class SettingViewModel {
  constructor() {
    this.url = ko.observable();

    // 初期表示
    this.url('http://dev-hub.herokuapp.com/');
  }

  setUrl() {
    ipcRenderer.send("setUrl", this.url());
  }
}

window.onload = () => {
  var vm = new SettingViewModel();
  ko.applyBindings(vm);
};

