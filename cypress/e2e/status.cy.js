describe('Смена статуса рабочего пространства', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://dev.profteam.su/')
        cy.get('[href="/login"] > .button', {timeout: 3000}).click()
        cy.get('.form-input--text',
            {timeout: 3000}).type('testerEmployer')
        cy.get('.form-input--password',
            {timeout: 3000}).type('Password1')
        cy.wait(1000)
        cy.get(':nth-child(3) > .button', {timeout: 3000}).click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .menu-item__item-name',
            {timeout: 3000}).click()
        cy.wait(1000)
    })
    it('Смена статуса рабочего пространства (подтверждение)', () => {
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(2) > button',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('#app > div.page > div > section > div.detailed-workspace-header > div > div > div > div.status-open__buttons > button:nth-child(1)',
            {timeout: 3000}).click()
    })

    it('Смена статуса рабочего пространства (отклонение)', () => {
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(1) > button',
            {timeout: 3000}).click()
        cy.wait(1000)
        cy.get('#app > div.page > div > section > div.detailed-workspace-header > div > div > div > div.status-open__buttons > button:nth-child(2)',
            {timeout: 3000}).click()
    })
})