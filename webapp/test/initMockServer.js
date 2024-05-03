sap.ui.define([
    "../localService/mockserver"
], function(mockserver){
    "use strict";
    mockserver.init();

    //*initialise the embedded component in HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"])
})