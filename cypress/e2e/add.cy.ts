/// <reference types="Cypress" />

describe("Add to cart", () => {
  it("Should navigate to the product detail page, add product to cart", () => {
    // Visit page
    cy.visit("http://localhost:3000/product/1");
    cy.get("#btn-add").click();
    // The badge icon should be visible and it must contains "1"
    cy.get("#cart-length").should("be.visible");
    cy.get("#cart-length").contains("1");
  });
});

const asModule = {};

export default asModule;
