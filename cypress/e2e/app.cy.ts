describe("general app test", () => {
  it("renders the title 'Weather App'", () => {
    cy.visit("http://localhost:3000");

    cy.title().should("include", "Weather App");
  });
});
