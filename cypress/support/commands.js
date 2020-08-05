// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand('matchImageSnapshot', {
	timeout: 60000,
	capture: 'viewport',
	blackout: ['[data-cy="content"]'],
	disableTimersAndAnimations: true,
	onBeforeScreenshot($element) {
		const $tsparticles = $element.find('div#tsparticles');

		if ($tsparticles) {
			$tsparticles.hide();
		}
	},
	onAfterScreenshot($element, _) {
		const $tsparticles = $element.find('div#tsparticles');

		if ($tsparticles) {
			$tsparticles.show();
		}
	}
});
