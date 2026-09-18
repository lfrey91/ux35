sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ux35v4/test/integration/pages/zux35_trainer1_c_soList.gen",
	"ux35v4/test/integration/pages/zux35_trainer1_c_soObjectPage.gen",
	"ux35v4/test/integration/pages/ItemSetObjectPage.gen"
], function (JourneyRunner, zux35_trainer1_c_soListGenerated, zux35_trainer1_c_soObjectPageGenerated, ItemSetObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ux35v4') + '/test/flp.html#app-preview',
        pages: {
			onThezux35_trainer1_c_soListGenerated: zux35_trainer1_c_soListGenerated,
			onThezux35_trainer1_c_soObjectPageGenerated: zux35_trainer1_c_soObjectPageGenerated,
			onTheItemSetObjectPageGenerated: ItemSetObjectPageGenerated
        },
        async: true
    });

    return runner;
});

