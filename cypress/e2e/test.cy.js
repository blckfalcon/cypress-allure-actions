describe("template spec", () => {
    before(() => {
        cy.allure().epic("Dashboard").feature("Idea Splits").story("Create");
        cy.allure().suite("Full Regression");
    });

    it("passes", () => {
        cy.visit("https://example.cypress.io");
    });
});
