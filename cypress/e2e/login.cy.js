
describe('BDD Testing on Login with correct details', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("JohnDoe")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password123")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
  })
})

describe('BDD Testing on Login with Invalid Username', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("JohnD")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password123")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
  })
})

describe('BDD Testing on Login with Invalid Password', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("JohnDoe")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("password13")
    cy.get('#loginPanel > form > div:nth-child(5) > input').click()
  })
})