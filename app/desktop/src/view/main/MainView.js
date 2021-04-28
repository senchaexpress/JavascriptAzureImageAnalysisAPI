Ext.define('MyCVApp.view.main.MainView', {
 xtype: 'mainview',
  controller: 'mainviewcontroller',
  extend: 'Ext.Panel',
  layout: 'vbox',
  items: [{
          xtype: 'fieldset',
          items: [
              {
                 xtype: 'textfield',
                 label: 'Url of the image to be analyzed',
                 placeholder: 'Enter url of the image for analysis',
                 name: 'textContent',
                 // validate not empty
                 required: true,
                 reference: 'imageURL'
              },
              {
                  xtype: 'button',
                  text: 'analyze',
                  handler: 'onAnalyzeClick'
              }
          ]
      },
      {
       xtype: 'image',
       title: 'Source Image',
       reference: 'srcImage',

      },
     {
      xtype: 'reportgrid',
      title: 'Image Analysis Report',
      bind: {
                store: '{cvStore}'
            }
    }],
  viewModel: {
      stores: {
          cvStore: {
              type: 'store',
              storeId: 'dStore',
              autoLoad: true,
              fields:[{
                  name: 'captionText',
                  mapping: 'text'
              },
              {
                  name: 'captionConfidence',
                  mapping: 'confidence'
              }
              ],
              proxy: {
                  type: 'memory',
                  data: null,
                  reader: {
                      rootProperty: 'captions'
                  }
              }
          }
      }
  },
  defaults: {
      flex: 1,
      margin: 16
  }
});
