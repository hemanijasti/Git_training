describe('feedback demo', () =>{
    it('should submit the feedback form', () =>{
        cy.visitFeedbackpage()
        cy.fixture('feedbackdata').then(({name, email, subject, message}) =>{
            cy.submitFeedback(name, email, subject, message)
        }) 
    })
})