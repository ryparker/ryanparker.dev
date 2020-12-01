before(() => {
	cy.visit('http://localhost:8000');
	cy.contains('Contact').click();
});

it.skip('renders recaptcha v2 checkbox, when all fields are filled', () => {
	cy.get('input[name=name]').type('Charlie Kelly');
	cy.get('input[name=email]').type('ryparker33@gmail.com');
	cy.get('textarea[name=message]').type('This is a cypress test for the contact section.');

	cy.contains('I\'m not a robot.').should('exist');
});

