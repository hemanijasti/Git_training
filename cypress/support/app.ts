declare namespace Cypress{
    interface Chainable{
        /**
         * Navigate to the home page of our application zerosecurity
         */
        visitHomepage(): Chainable<Element>

        /**
         * Navigate to the login page of our application zerosecurity
         */
        visitLoginpage(): Chainable<Element>

        /**
         * Navigate to the feedback page of our application zerosecurity
         */
        visitFeedbackpage(): Chainable<Element>
    }
}

Cypress.Commands.add('visitHomepage', () =>{
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include','index.html')
})

Cypress.Commands.add('visitLoginpage', () =>{
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.url().should('include','login.html')
})

Cypress.Commands.add('visitFeedbackpage', () =>{
    cy.visit('http://zero.webappsecurity.com/feedback.html')
    cy.url().should('include','feedback.html')
})