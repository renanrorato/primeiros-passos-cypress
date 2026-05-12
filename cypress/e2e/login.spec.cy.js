describe('Orange HRM tests', () => {

const selectorList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
  wrongCredencialAlert: "[role='alert']"
}

  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')    
  })

   it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('test')
    cy.get(selectorList.passwordField).type('test')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredencialAlert) 
  })
})