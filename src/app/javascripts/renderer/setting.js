const ko = require('knockout');
const storage = require('electron-json-storage');
const {ipcRenderer} = require('electron');

class SettingViewModel {
  constructor() {
    this.url = ko.observable();
    var self = this;

		storage.get('config', function (error, data) {
			if (error) throw error;

      // 初期表示
      if (data.url != null){
        self.url(data.url);
      }else{
        self.url('http://dev-hub.herokuapp.com/');
      }
		});
  }

  setUrl() {
    ipcRenderer.send("setUrl", this.url());

    // 設定ファイルへ保存
		var json = {
			url: this.url()
		};
		storage.set('config', json, function (error) {
			if (error) throw error;
		});
	}
}

window.onload = () => {
  var vm = new SettingViewModel();
  ko.applyBindings(vm);
};

