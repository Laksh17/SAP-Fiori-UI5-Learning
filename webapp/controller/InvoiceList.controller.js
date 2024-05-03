sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller,JSONModel, formatter, Filter, FilterOperator) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        // ? Create a new JSON Model with the currency attached. Set it to the model and call it in XML
        formatter: formatter,
        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view")             
        },
        onFilterInvoices: function(oEvent){
            // * Build the filter

            var oFilter = [];
            var sQuery = oEvent.getParameter("query");
            if (sQuery){
                oFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery))
            }

            // * Bind the filter
        
            var oList = this.byId("invoiceList");
            var oBinding = oList.getBinding("items");
            oBinding.filter(oFilter);
            
        },

        // * Clicking the Link for detail nav
        onPress: function (oEvent){
            var oItem = oEvent.getSource(); //* Source for the event which initiated action

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
    })
})