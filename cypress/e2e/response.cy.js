describe('Отлик на стажировку студентом', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/login"] > .button', {timeout: 3000}).click()
        cy.get('.form-input--text',
            {timeout: 3000}).type('hh')
        cy.get('.form-input--password',
            {timeout: 3000}).type('QWEasd123')
        cy.wait(1000)
        cy.get(':nth-child(3) > .button', {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(3) > span').click()
    })
    it('Отклик на стажировку', () => {
        cy.wait(1000)
        cy.get(':nth-child(2) > .internship-item__info-wrapper > .internship-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green',
            {timeout: 3000}).click()
    })
})