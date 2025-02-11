describe('Подтверждение отклика работодателем', () => {
    с

    it('Отклонение отклика', () => {
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(1)',
            {timeout: 3000}).click()
    })

    it('Подтверждение отклика', () => {
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(5) > p',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(2) > div.responses-list-item__actions > div:nth-child(1)',
            {timeout: 3000}).click()
    })
})