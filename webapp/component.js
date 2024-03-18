sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent,JSONModel,ResourceModel) {
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

        }
    }) //* Extend the component file
});