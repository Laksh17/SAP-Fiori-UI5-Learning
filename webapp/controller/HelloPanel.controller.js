sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment){
    'use strict'
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function(){
            // * Read Message from i18n
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //*oData objecy
            var sMsg = oBundle.getText("helloMsg", [sRecipient]); //*Comes from i18n 
            
            MessageToast.show(sMsg);
        },   
        
        onOpenDialogue: function(){
            this.getOwnerComponent().openHelloDialogue();
        },

        onCloseDialogue: function (){
            this.byId("helloDialogue").close();
        }
    })
     
});