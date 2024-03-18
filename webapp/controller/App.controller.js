sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller,MessageToast,JSONModel,ResourceModel){
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App",{
        
        onShowHello: function(){
            // * Read Message from i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //*oData objecy
            var sMsg = oBundle.getText("helloMsg", [sRecipient]); //*Comes from i18n 
            
            MessageToast.show(sMsg);
        }
    })
})