sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        Navigation: function(oContext, aSelectedContexts) {

            for (var i = 0; i < aSelectedContexts.length; i++){

                var SelectedCompanyName = aSelectedContexts[i].getProperty("CompanyName");
                var surl = "https://www.google.com/search?q=" + SelectedCompanyName;
                window.open(surl, "_blank");


            }
            
        }
    };
});
