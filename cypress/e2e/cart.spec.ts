describe("Carrinho de compras", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Adiciona um item no carrinho e verifica no carrinho", () => {
    cy.contains("Adicionar ao carrinho").first().click();
    cy.visit("/cart");
    cy.get("h3").should("have.length.at.least", 1);
  });

  it("Remove um item do carrinho e verifica mensagem", () => {
    cy.visit("/");
    cy.contains("Adicionar ao carrinho").first().click();
    cy.visit("/cart");
    cy.contains("Remover").click();
    cy.contains("Seu carrinho está vazio!").should("exist");
  });
});
