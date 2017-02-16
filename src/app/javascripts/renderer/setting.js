const ko = require('knockout');
const {ipcRenderer} = require('electron');

class SampleViewModel {
  constructor() {
  	this.name = ko.observable();
  }

	showName() {
		//alert(`こんにちは、${this.name()}さん`);
    ipcRenderer.send("setUrl",'http://dev-hub.herokuapp.com/');
	}
}

window.onload = () => {
	var vm = new SampleViewModel();
	ko.applyBindings(vm);
};

