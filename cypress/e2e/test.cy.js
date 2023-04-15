describe("full regression spec", () => {
    before(() => {
        cy.allure().epic("Dashboard <Full Regression>").feature("Idea Splits <Full Regression>").story("Create <Full Regression>");
        cy.allure().suite("Full Regression");
    });

    it("passes", () => {
        expect(true).to.equal(true);
    });
});

describe("smoke spec", () => {
    before(() => {
        cy.allure().epic("Dashboard <Smoke>").feature("Idea Splits <Smoke>").story("Create <Smoke>");
        cy.allure().suite("Smoke");
    });

    it("passes", () => {
        expect(true).to.equal(true);
    });
});

describe("post-release spec", () => {
    before(() => {
        cy.allure().epic("Dashboard <Post>").feature("Idea Splits <Post>").story("Create <Post>");
        cy.allure().suite("Post Release");
    });

    it("passes", () => {
        expect(true).to.equal(true);
    });
});