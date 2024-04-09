sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialogue"
], function(UIComponent,JSONModel,ResourceModel,HelloDialogue) {
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

            // * Call the dialogue and add an exit event handler.

            this._helloDialogue = new HelloDialogue(this.getRootControl());
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