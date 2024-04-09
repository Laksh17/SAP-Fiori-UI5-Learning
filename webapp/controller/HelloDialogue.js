sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
  function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend(
      "sap.ui.demo.walkthrough.controller.HelloDialogue",
      {
        constructor: function (oView) {
          this._oView = oView;
        },
        exit: function () {
          delete this._oView;
        },
        open: function () {
          var oView = this._oView;

          //* create dialogue lazily
          if (!oView.byId("helloDialogue")) {
            var oFragmentController = {
              onCloseDialogue: function () {
                oView.byId("helloDialogue").close();
              },
            };

            // * Async loading
            Fragment.load({
              id: oView.getId(),
              name: "sap.ui.demo.walkthrough.view.HelloDialogue",
              controller: oFragmentController,
            }).then((oDialog) => {
              // * Connect the dialogue to the root view of the component
              oView.addDependent(oDialog);
              oDialog.open();
            });
          } else {
            oView.byId("helloDialogue").open();
          }
        },
      }
    );
  }
);
