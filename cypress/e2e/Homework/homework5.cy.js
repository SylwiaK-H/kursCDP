describe('homework5', () => {
    it("visit main page and take screenshot", function(){
        cy.visit('https://fabrykatestow.pl')
        cy.get('.elementor-button-text')
            .contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()
        cy.url().should('eq', 'https://fabrykatestow.pl/wa/')
        cy.get("h2")
            .contains("Kto Cię uczy?")
            .scrollIntoView()
            .should("be.visible");
        cy.wait(2000);
        cy.screenshot("screenshot", {
            capture: "viewport",
            overwrite: true,
        })
    })
})