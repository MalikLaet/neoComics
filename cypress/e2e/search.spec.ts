describe('Busca de quadrinhos', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.contains("Carregando...").should("not.exist");

    cy.get('[data-cy="add-to-cart"]', { timeout: 10000 }).should("exist");
  });

  it('Deve filtrar quadrinhos conforme a busca', () => {
    cy.get('input[placeholder="O que você procura?"]').type('Spider');

    cy.contains(/Spider/i, { timeout: 10000 }).should('exist');

    cy.get('button').contains('Adicionar ao carrinho')
      .should('have.length.lessThan', 20);
  });
});
