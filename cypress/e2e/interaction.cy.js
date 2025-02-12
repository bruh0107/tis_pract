describe('Взаимодействие внутри рабочего пространства (работодатель)', () => {
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
    })
    it ('Переход в рабочее пространство', () => {
        cy.get(':nth-child(5) > .menu-item__item-name',
            {timeout: 3000}).click()
        cy.wait(1000)
        cy.get('.infinite-loader > :nth-child(2) > .button',
            {timeout: 3000}).click()
        cy.wait(2000)
    })
    it('Взаимодействие внутри рабочего пространства', () => {
        cy.wait(2000)
        cy.get(':nth-child(5) > .menu-item__item-name',
            {timeout: 3000}).click()
        cy.wait(1000)
        cy.get('.infinite-loader > :nth-child(1) > .button',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('.form-area').type('Привет я не хочу работать')
        cy.wait(1000)
        cy.get('.comment-textarea__buttons > :nth-child(2) > .base-icon',
            {timeout: 3000}).click()
        cy.get('#file-uploader',
            {timeout: 3000}).selectFile('cypress/fixtures/da.png', {force: true})
        cy.wait(2000)
        cy.get('#app > div.page > div > section > section > section > div > div > div.detailed-workspace-activity-comments__menu > article > div.comment-textarea__textarea > div.comment-textarea__buttons > button:nth-child(2)',
            {timeout: 3000}).click()
    })
})