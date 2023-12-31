describe('BDD Testing on Parabank Registration', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('12345')
    cy.get('#customer\\.phoneNumber').type('1234567890')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('JohnDoe')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password123')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

describe('BDD Testing on Parabank Registration : Already User Exist', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('12345')
    cy.get('#customer\\.phoneNumber').type('1234567890')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('JohnDoe')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password123')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

describe('BDD Testing on Parabank Registration : Phone number having 8 digits', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('12345')
    cy.get('#customer\\.phoneNumber').type('12345678')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('doJohn')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password123')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

describe('BDD Testing on Parabank Registration : Open a new account and input aplhabets in ZipCode', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John1')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('AB3421')
    cy.get('#customer\\.phoneNumber').type('12345678')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('LailaD')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password123')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

describe('BDD Testing on Parabank Registration : Register a new account and insert more than 10 digits in Phone number', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John1')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('AB3421')
    cy.get('#customer\\.phoneNumber').type('1234567893424')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('Luffy7')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password123')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

describe('BDD Testing on Parabank Registration : Register a new user having Different Password and Confirm Password', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John1')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('AB3421')
    cy.get('#customer\\.phoneNumber').type('1234567893424')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('Light32')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password1234')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})

describe('BDD Testing on Parabank Registration : Register a new user having SSN same as the Name', () => {
  it('registration test', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    cy.get('#customer\\.firstName').type('John1')
    cy.get('#customer\\.lastName').type('Doe')
    cy.get('#customer\\.address\\.street').type('123 Main St')
    cy.get('#customer\\.address\\.city').type('City')
    cy.get('#customer\\.address\\.state').type('State')
    cy.get('#customer\\.address\\.zipCode').type('AB3421')
    cy.get('#customer\\.phoneNumber').type('1234567893424')
    cy.get('#customer\\.ssn').type('Kakarot54')
    cy.get('#customer\\.username').type('Kakarot54')
    cy.get('#customer\\.password').type('password123')
    cy.get('#repeatedPassword').type('password123')
    cy.get("#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input").click()
  })
})



