describe('hello', function() {
  it('should works', function() {
    cy.visit('https://google.com')
    cy.get('.gLFyf')
      .clear()
      .type('hello cypress')
  })
})
