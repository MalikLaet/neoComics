describe("Carrinho de compras", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Carregando... ").should("not.exist");
  });

  it("Adiciona e remove um item do carrinho na mesma página", () => {
  cy.get('[data-cy="add-to-cart"]').first().click({ force: true });
    cy.wait(500);
     cy.get('[data-cy="open-cart"]').click();

    cy.get('[data-cy="comic-title"]').should("have.length.at.least", 1);

    cy.contains("Remover").click();

  });
});
