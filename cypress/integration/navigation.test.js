
beforeEach(() => {
	cy.visit('http://localhost:8000');
});

it('landing page displays as expected', () => {
	cy.contains('Hi there!');
	cy.matchImageSnapshot();
});

it('projects are displayed, when project link is clicked.', () => {
	cy.contains('Project').click().wait(3000);
	cy.contains('Projects');
	cy.contains('Recently Starred');
	cy.matchImageSnapshot();
});

it('roadmap is displayed, when roadmap is clicked.', () => {
	cy.contains('Roadmap').click().wait(3000);
	cy.contains('On Deck');
	cy.contains('Recently Completed');
	cy.matchImageSnapshot();
});

it('contact me section is displayed, when contact is clicked.', () => {
	cy.contains('Contact').click().wait(3000);
	cy.contains('Contact me');
	cy.matchImageSnapshot();
});

