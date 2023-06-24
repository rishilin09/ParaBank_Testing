describe('BDD Testing on creating new savings account of logged in user', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("JohnDoe")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password123")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
    cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
    cy.get('#type').select(1)
    cy.get('#fromAccountId').select(1)
    cy.get('#rightPanel > div > div > form > div > input').click()
  })
})

describe('BDD Testing on creating new checking account of logged in user', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("JohnDoe")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password123")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
    cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
    cy.get('#type').select(0)
    cy.get('#fromAccountId').select(2)
    cy.get('#rightPanel > div > div > form > div > input').click()
  })
})