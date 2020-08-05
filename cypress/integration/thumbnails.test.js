beforeEach(() => {
	cy.visit('http://localhost:8000');
});

it('linkedin 1200x627', () => {
	cy.viewport(1200, 627);
	cy.wait(4000);
	cy.matchImageSnapshot();
});

