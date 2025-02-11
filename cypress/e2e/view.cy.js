describe('Просмотр стажировок', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('https://dev.profteam.su/')
        cy.get('#app > div.page > header:nth-child(1) > nav > a:nth-child(3)').click()
    })

    it('Поиск (позитивный сценарий)', () => {
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > input',
            {timeout: 3000}).type('й234цуфвыа')
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > button',
            {timeout: 3000}).click()
        cy.wait(2000)
    })

    it('Поиск (негативный сценарий)', () => {
        cy.wait(2000)
        const longText = 'A'.repeat(300);
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > input',
            {timeout: 3000}).type(longText).should('have.value', 'A'.repeat(300))
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > button',
            {timeout: 3000}).click()
    })

    it('Фильтр оплаты', () => {
        cy.get('.radio-list > :nth-child(2)', {timeout: 3000}).click()

        cy.wait(1000)
        cy.get('.radio-list > :nth-child(3)', {timeout: 3000}).click()

        cy.wait(1000)
        cy.get('.radio-list > :nth-child(2)', {timeout: 3000}).click()
        cy.wait(2000)
    })

    it('Фильтр типа занятости', () => {
        cy.wait(2000)
        cy.get('.form-select__selected', {timeout: 3000}).click()
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div.form-select__items > div:nth-child(1)',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('.form-select__selected', {timeout: 3000}).click()
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div.form-select__items > div:nth-child(2)',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('.form-select__selected', {timeout: 3000}).click()
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div.form-select__items > div:nth-child(3)',
            {timeout: 3000}).click()
        cy.wait(2000)
        cy.get('.form-select__selected', {timeout: 3000}).click()
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div.form-select__items > div:nth-child(4)',
            {timeout: 3000}).click()
        cy.wait(2000)
    })

    it('Сброс фильтров', () => {
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > input',
            {timeout: 3000}).type('й234цуфвыа')

        cy.get('.radio-list > :nth-child(3)', {timeout: 3000}).click()

        cy.get('.form-select__selected', {timeout: 3000}).click()
        cy.get('#app > div.page > div > section > div > div.vacancies-block__vacancies-filters-wrapper > div.vacancies-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div.form-select__items > div:nth-child(2)',
            {timeout: 3000}).click()

        cy.wait(2000)

        cy.get('.custom-modal-mobile__buttons > .button', {timeout: 3000}).click()
    })
})