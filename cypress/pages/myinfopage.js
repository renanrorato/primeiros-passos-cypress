class MyInfoPage {

    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fillPersonalDetalis(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetalis(employeeId,otherId,driverLicenseNumber,expireDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expireDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillsStatus(){
    cy.get(this.selectorsList().genericCombobox).eq(0).click()
    cy.get(this.selectorsList().secondItemCombobox).click()
    cy.get(this.selectorsList().genericCombobox).eq(1).click()
    cy.get(this.selectorsList().thirdItemCombobox).click()
    }

}

export default MyInfoPage