Ext.define('MyCVApp.Application', {
  extend: 'Ext.app.Application',
  name: 'MyCVApp',
  requires: ['MyCVApp.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
