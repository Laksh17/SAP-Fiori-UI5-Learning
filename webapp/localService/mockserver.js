sap.ui.define([
    'sap/ui/core/util/MockServer',
    'sap/base/util/UriParameters'
], function(MockServer, UriParameters) {
    'use strict';
    
    return{
        init: function (){
            //* create
            var oMockServer = new MockServer({
                rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
            })

            var oUriParameters = new UriParameters(window.location.href);
            
            //* configure with delay
            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUriParameters.get("serverDelay") || 500
            })

            //* Simmulate
            var sPath = "../localService";
            oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockData");

            //* Start
            oMockServer.start();
        } 
    }
});