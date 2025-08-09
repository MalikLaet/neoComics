describe("Carrinho de compras", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Carregando...").should("not.exist");
  });

  it("Adiciona e remove um item do carrinho na mesma página", () => {
    cy.get('[data-cy="add-to-cart"]').first().click({ force: true });

    cy.get("h3").should("have.length.at.least", 1);

    cy.contains("Remover").click();

    cy.contains("Seu carrinho está vazio!").should("exist");
  });
});
