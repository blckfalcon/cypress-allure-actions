describe("full regression spec", () => {
    before(() => {
        cy.allure().epic("Dashboard").feature("Idea Splits").story("Create");
        cy.allure().suite("Full Regression");
    });

    it("passes", () => {
        expect(true).to.equal(true);
    });
});

describe("smoke spec", () => {
    before(() => {
        cy.allure().epic("Dashboard").feature("Idea Splits").story("Create");
        cy.allure().suite("Smoke");
    });

    it("passes", () => {
        expect(true).to.equal(true);
    });
});


describe("post-release spec", () => {
    before(() => {
        cy.allure().epic("Dashboard").feature("Idea Splits").story("Create");
        cy.allure().suite("Post Release");
    });

    it("passes", () => {
        expect(true).to.equal(true);
    });
});
