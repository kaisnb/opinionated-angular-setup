it('loads examples', () => {
  cy.visit('/');
  cy.contains('Here are some links to help you get started');
});
