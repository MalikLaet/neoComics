describe('Busca de quadrinhos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve filtrar quadrinhos conforme a busca', () => {
    cy.get('input[placeholder="O que você procura?"]').type('Spider')

    // Verifica se aparece ao menos um quadrinho que tenha "Spider" no título
    cy.get('h3, h4, h5, span, div') // depende do seu título, no cards vc usa TittleCard (provavelmente h3/h4)
      .contains(/Spider/i)
      .should('exist')

    // Opcional: garantir que o número de cards exibidos seja menor que o total
    cy.get('button').contains('Adicionar ao carrinho').its('length').should('be.lt', 20) // supondo que tem > 20 quadrinhos no total
  })
})
