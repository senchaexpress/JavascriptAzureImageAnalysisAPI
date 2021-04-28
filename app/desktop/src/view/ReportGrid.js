Ext.define('MyCVApp.view.ReportGrid', {
extend: 'Ext.grid.Grid',
xtype: 'reportgrid',
columns: [{
    type: 'column',
    text: 'Caption',
    dataIndex: 'captionText',
    width: 600
}, {
    text: 'Confidence',
    dataIndex: 'captionConfidence',
    width: 300
}]
});