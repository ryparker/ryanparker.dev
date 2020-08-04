context('Navigation', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8000');
	});

	it('Matches landing page', () => {
		cy.contains('Hi there!');
		cy.matchImageSnapshot({
			blackout: ['[data-cy=particles]']
		});
	});

	it('project link navigates to project section.', () => {
		cy.get('[data-cy=navbar]').within(() => {
			cy.get('[data-cy=projects-link]').click().wait(3000);
		});

		cy.matchImageSnapshot({
			blackout: ['[data-cy=particles]']
		});
	});

	it('roadmap link navigates to roadmap section.', () => {
		cy.get('[data-cy=navbar]').within(() => {
			cy.get('[data-cy=roadmap-link]').click().wait(3000);
		});

		cy.matchImageSnapshot({
			blackout: ['[data-cy=particles]']
		});
	});

	it('contact link navigates to contact section.', () => {
		cy.get('[data-cy=navbar]').within(() => {
			cy.get('[data-cy=contact-link]').click().wait(3000);
		});

		cy.matchImageSnapshot({
			blackout: ['[data-cy=particles]']
		});
	});
});
