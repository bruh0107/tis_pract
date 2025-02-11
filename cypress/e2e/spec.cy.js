describe('template spec', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://dev.profteam.su/')
    cy.get('#app > div.page > div > main > div > div.header-container__buttons > a:nth-child(1) > button',
        {timeout: 3000}).first().click()
    cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div > input',
        {timeout: 3000}).type('testerEmployer')
    cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input',
        {timeout: 3000}).type('Password1')
    cy.wait(1000)
    cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button',
        {timeout: 3000}).click()
  })

  it('Создание новой стажировки работодателем (позитивный сценарий)', () => {
    cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(8) > p',
        {timeout: 3000}).click()
    cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(8) > section > div.vacancies-block__filters-wrapper > button',
        {timeout: 3000}).click()
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input',
        {timeout: 3000}).type('ЖОСКАЯ СТАЖИРОВКА', { force: true })
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div',
        {timeout: 3000}).click()
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div > div.form-select__items > div:nth-child(2)',
        {timeout: 3000}).click()
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > div',
        {timeout: 3000}).click()
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > div > div.form-select__items > div:nth-child(2)',
        {timeout: 3000}).click()
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > input',
        {timeout: 3000}).type('2025-02-11')
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > input',
        {timeout: 3000}).type('2025-04-16')
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(6) > div > textarea',
        {timeout: 3000}).type('Требования требования требования')
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(7) > div > textarea',
        {timeout: 3000}).type('Ничего не делать')
    cy.wait(1000)
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button',
        {timeout: 3000}).click({force: true})
  })

  it('Создание новой стажировки работодателем (негативный сценарий)', () => {
    cy.get('#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(8) > p',
        {timeout: 3000}).click()
    cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(8) > section > div.vacancies-block__filters-wrapper > button',
        {timeout: 3000}).click()
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > input',
        {timeout: 3000}).type('2024-11-11')
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > input',
        {timeout: 3000}).type('2024-10-11')
    cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button',
        {timeout: 3000}).click({force: true})
    cy.wait(1000)
    cy.contains('Обязательное поле, максимум 255 символов').should('be.visible')
    cy.contains('Обязательное поле, в периоде от одного дня до полугода').should('be.visible')

    cy.get(':nth-child(6) > .form-error > span').within(() => {
      cy.contains('Обязательное поле, максимум 1000 символов').should('be.visible')
    })

    cy.get(':nth-child(7) > .form-error > span').within(() => {
      cy.contains('Обязательное поле, максимум 1000 символов').scrollIntoView().should('be.visible')
    })
  })
})