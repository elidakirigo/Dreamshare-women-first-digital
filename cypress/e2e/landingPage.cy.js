describe("Landing page", () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000')
    cy.visit("https://dreamshare-women-first-digital.vercel.app/");
  });

  it("passes", () => {
    cy.visit("https://dreamshare-women-first-digital.vercel.app/");
  });

  it("Should route to Homepage", () => {
    cy.location("pathname").should("equal", "/");
  });

  it("Contains title Dreamshare", () => {
    cy.contains("DREAMSHARE");
  });

  it("Contains hidden header text", () => {
    cy.getDataTest("hidden-header").should("not.be.visible");
  });

  it("Should contain login text in btn", () => {
    cy.getDataTest("login-test").should("contain.text", "Login");
  });

  it("Should contain signup text in btn", () => {
    cy.getDataTest("signup-test").should("contain.text", "SignUp");
  });

  it("Contains call to action", () => {
    cy.getDataTest("CTO-test").should(
      "contain.text",
      "And find the perfect partner to fullfill it",
    );
  });

  it("should not be logged in", () => {
    cy.contains("DREAMSHARE");
    cy.getDataTest("title-header").should("contain.text", "DREAMSHARE");
  });

  it("Contains Movies heading", () => {
    cy.getDataTest("movies-test").should(
      "contain.text",
      "Most Trending Movies",
    );
  });

  it("Contains Read more", () => {
    cy.getDataTest("readmore-test").should("contain.text", "Read More");
  });
  it("Contains Celebs", () => {
    cy.getDataTest("celeb-test").should("contain.text", "Most Popular Celebs");
  });

  // it('Contains Holiday Content', () => {
  // 	cy.contains(/See other patners/).should('exist')
  // })

  it("Contains Holiday Content", () => {
    cy.getDataTest("holiday-test").should(
      "contain.text",
      "Discover holiday activity ideas",
    );
  });

  it("Contains Holiday Content", () => {
    cy.getDataTest("holiday-test").should(
      "contain.text",
      "Discover holiday activity ideas",
    );
  });

  it("Contains Holiday Activity text", () => {
    cy.getDataTest("holiday-activity").should(
      "contain.text",
      "Create your holiday activity",
    );
  });

  it("Contains Holiday Activity text", () => {
    cy.getDataTest("intrest-test").should(
      "contain.text",
      "Hi! What are your holiday interests?",
    );
  });
});
