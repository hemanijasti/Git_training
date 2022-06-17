declare namespace Cypress{
    interface Chainable{
        /**
         * @param username - takes username or id
         * @param password - takes user password
         */
        login(username: string, password: string): Chainable<Element>

        /**
         * 
         * @param name - takes name of the author
         * @param email - takes email (there is no validation in the backend)
         * @param subject - takes subject to the message
         * @param message - takes the message of the author
         */
        submitFeedback(name: string, email: string, subject , message:string): Chainable<Element>
    }
}

Cypress.Commands.add('login', (username, password) =>{
    cy.get('.brand').should('have.text','Zero Bank')
    cy.get('h3').should('have.text','Log in to ZeroBank')
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
    //cy.url().should('include','index.html')
})

Cypress.Commands.add('submitFeedback', (name, email, subject, message) =>{
    cy.get('h3').should('have.text','Feedback')
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#comment').type(message)
    cy.get('.btn-signin').click()
    //cy.url().should('include','sendFeedback.html')
    //cy.get('#feedback-title').contains('Feedback')
    //cy.get('.offset3').should('be.visible').and('contain','Thank you for your comments, hemani. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
})