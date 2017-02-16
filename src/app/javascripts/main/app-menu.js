const {app, Menu, MenuItem} = require('electron');

module.exports = class AppMenu {
  static setup(){
    const settingMenu = new MenuItem({
      label: 'Setting',
      submenu: [
        {
          label: 'Setting',
          click() {
            app.emit('showSetting');
          }
        }
      ]
    });

    const template = AppMenu.getBasicTemplate();
    const menu = Menu.buildFromTemplate(template);
    menu.append(settingMenu);
    Menu.setApplicationMenu(menu);
  }

  static getBasicTemplate() {
    const template = [];

    return template;
  }
};
