Ext.define('MyCVApp.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  
onAnalyzeClick: function (button) {
        var imageUrl = this.lookupReference('imageURL').getValue();
        console.log('value:{}',imageUrl);
        this.sendCVRequest(imageUrl);
        var displayImg = this.lookupReference('srcImage').setSrc(imageUrl);

      },

//code modified from https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts-sdk/image-analysis-client-library?tabs=visual-studio&pivots=programming-language-csharp
sendCVRequest: function (imgUrl) {
  MyCVApp.xAsync.series([
    async function () {

			const computerVisionClient = new MyCVApp.xComputerVisionClient(
                                         new MyCVApp.xApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': MyCVApp.xKey } }), MyCVApp.xEndpoint);
            const describeURL = imgUrl;

            // Send request to analyze image
            const response = (await computerVisionClient.describeImage(describeURL));

            //process the response
            console.log(`Resposne:${JSON.stringify(response)}`);
            var data = response.captions;
            
            //Update the data store with the response
            var store = Ext.data.StoreManager.lookup('dStore');
            console.log('dStore:{}',store);
            store.getProxy().data = data;
            store.reload();
    },
    function () {
      return new Promise((resolve) => {
        resolve();
      })
    }
  ], (err) => {
  	alert(err);
    throw (err);
  });
}

})

