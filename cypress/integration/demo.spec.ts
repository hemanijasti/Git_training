describe('Login demo', () =>{

    it('should load the homepage', () =>{
        cy.visitHomepage()
    })

    it('should visit login into the application', () => {
        cy.visitLoginpage()
        cy.fixture('logindata').then(({username, password}) =>{
            cy.login(username, password)
        }) 
    })
})