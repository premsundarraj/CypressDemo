describe('The MadLibs second Form Test', () => {
    it('loads successfully', () => {
        // ARRANGE
        cy.visit('http://localhost:3000')

        // ACT
        // None: Loading only

        // ASSERT
        // Navbar
        cy.get('nav')
            .should('be.visible')
            .within(() => {
                cy.get('h1')
                    .should('contain.text','My Cool MadLibs')
                cy.get('a')
                    .should('be.visible')
                    .should('contain.text', 'Exit Site')
            })

        // Form
        cy.get('h2').should('contain.text','Enter Your Choices!')
        cy.get('table').should('be.visible')
        cy.get('tr').should('have.length', 10)
        cy.get('button')
            .should('contain.text','Complete')
            .should('be.disabled')
    })

})