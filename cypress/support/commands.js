// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0nMZRYfhkX%2Fpe6wrAnq5BAb%2F8BSqfN%2FvtLBaNhWKBMCS%2BilHNV%2F7J5uyb%2F40kSYA6bNL2sj35v96zdLT%2FYqN3SJDR48BA31SIlSW0%2BDSxZL9ckR7Eak4KsNRzLpKzJJbQv%2B1FizQh1vfZSmvSco9VjGsJ10pIx2p9VNBoR61hGZnVNdGWKdz4uT%2BqkWUTnQGSyhCQKO2yKf%2BSV%2BIz9JFmJ2decOCREZUnDWkXLL5OzGMUzxl%2Fv%2BmeHvRWpnrUtEN3LOnNIQXsno862uNmE%2FLaCV5j1TBXyyWSRMQ8Dyroo4AEG0qGn5eWeFwxTW2aYWQ8OGw4khgwKPkLnhhAyuPdB8mgbtC%2Be93QJWItCMuR8dkUMs3M%2BtBo9Y9uBqjS6RfjQSx769y5qU5GQbImD49saS7Yc6p0%2FmfalwhlQSviayIISCcF5DrL%2FGU0SiuFkmv1Q%3D%3D000338'
    )
})