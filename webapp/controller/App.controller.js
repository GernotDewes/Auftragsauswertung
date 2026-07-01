sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("auftragsauswertung.controller.App", {
        onInit: function () {
            var oOrdersModel = new JSONModel({
                items: [
                    {
                        auftrag: "1000001",
                        kopfMaterial: "MAT-1000",
                        fehlerMaterial: "",
                        fehlerMeldung: ""
                    },
                    {
                        auftrag: "1000002",
                        kopfMaterial: "MAT-1000",
                        fehlerMaterial: "MAT-4711",
                        fehlerMeldung: "Fehlermeldung für Material MAT-4711"
                    },
                    {
                        auftrag: "1000003",
                        kopfMaterial: "MAT-2000",
                        fehlerMaterial: "MAT-7777",
                        fehlerMeldung: "Fehlermeldung für Material MAT-7777"
                    },
                    {
                        auftrag: "1000004",
                        kopfMaterial: "MAT-3000",
                        fehlerMaterial: "",
                        fehlerMeldung: ""
                    }
                ]
            });
            this.getView().setModel(oOrdersModel, "orders");

            var oViewModel = new JSONModel({
                kopfMaterial: "",
                fehlerMaterial: ""
            });
            this.getView().setModel(oViewModel, "view");
        },

        onSearch: function () {
            var oViewModel = this.getView().getModel("view");
            var sKopfMaterial = (oViewModel.getProperty("/kopfMaterial") || "").trim();
            var sFehlerMaterial = (oViewModel.getProperty("/fehlerMaterial") || "").trim();
            var aFilters = [];

            if (sKopfMaterial) {
                aFilters.push(new Filter("kopfMaterial", FilterOperator.Contains, sKopfMaterial));
            }

            if (sFehlerMaterial) {
                aFilters.push(new Filter("fehlerMaterial", FilterOperator.Contains, sFehlerMaterial));
            }

            var oTable = this.byId("ordersTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters);
        }
    });
});
