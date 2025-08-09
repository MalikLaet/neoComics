describe('Busca de quadrinhos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve filtrar quadrinhos conforme a busca', () => {
    cy.get('input[placeholder="O que você procura?"]').type('Spider')

    
    cy.get('h3, h4, h5, span, div')
      .contains(/Spider/i)
      .should('exist')

    cy.get('button').contains('Adicionar ao carrinho').its('length').should('be.lt', 20) 
  })
})
