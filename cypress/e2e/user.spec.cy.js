import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM tests', () => {
  const selectorList = {    
    
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateFiled: "[placeholder='yyyy-dd-mm']",
    genericCombobox: '.oxd-select-text--arrow',
    secondItemCombobox: '.oxd-select-dropdown  :nth-child(5)',
    thirdItemCombobox: '.oxd-select-dropdown  :nth-child(3)',
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User info update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()

    cy.get(selectorList.firstNameField).type('FirstNameTest')
    cy.get(selectorList.lastNameField).type('LastNameTest')

    cy.get(selectorList.genericField).eq(3).clear().type('EmployeeIdTest')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('Drivers li n Test')
    cy.get(selectorList.genericField).eq(6).clear().type('2026-05-14')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(selectorList.secondItemCombobox).click()
    cy.get(selectorList.genericCombobox).eq(1).click()
    cy.get(selectorList.thirdItemCombobox).click()

    //cy.get(selectorList.submitButton).eq(0).click({force: true})
    //cy.get('body').should('contain','Successfully Updated')
    //cy.get('.oxd-toast-close')

    //cy.get(selectorList.genericField).eq(3).clear().type('NickNameTest')

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert)
  })
})