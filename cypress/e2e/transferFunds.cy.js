describe('BDD Testing on transfering amount: Amount not specified', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("doJohn")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password123")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
    cy.visit('https://parabank.parasoft.com/parabank/transfer.htm')
    cy.get('#fromAccountId').select('17007').should('have.value', '17007')
    cy.get('#toAccountId').select('17118').should('have.value', '17118')
    cy.get('#rightPanel > div > div > form > div:nth-child(4) > input').click()
  })
})

describe('BDD Testing on transfering amount: Correct amount specified', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("doJohn")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password123")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
    cy.visit('https://parabank.parasoft.com/parabank/transfer.htm')
    cy.get('#fromAccountId').select('16896').should('have.value', '16896')
    cy.get('#toAccountId').select('17229').should('have.value', '17229')
    cy.get('#amount').type('100')
    cy.get('#rightPanel > div > div > form > div:nth-child(4) > input').click()
  })
})