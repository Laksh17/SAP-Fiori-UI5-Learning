sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialogue",
    "sap/ui/Device"
], function(UIComponent,JSONModel,ResourceModel,HelloDialogue, Device) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.walkthrough.Component",{
        metadata: {
            manifest: "json"
        },
        init : function(){
            // * INIT Function
            UIComponent.prototype.init.apply(this, arguments);

            // * Data Models
            var oData = {
                recipient: {
                    name: "UI5",
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // * Set Device Model
            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel,"device"); //? Alias of device
            


            // * Call the dialogue and add an exit event handler.
            this._helloDialogue = new HelloDialogue(this.getRootControl());

            // * Create URLs based on hash
            this.getRouter().initialize();
        },

        getContentDensityClass: function (){
            if(!this._sContentDensityClass){
                if(!Device.supportTouch){
                    this._sContentDensityClass= "sapUiSizeCompact";
                }
                else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        },

        exit: function(){
            this._helloDialogue.destroy();
            delete this._helloDialogue;
        },

        openHelloDialogue : function(){
            this._helloDialogue.open();
        }
        
    }) //* Extend the component file
});