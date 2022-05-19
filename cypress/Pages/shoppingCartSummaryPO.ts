export class shoppingCartSummaryPO {

proceed_to_checkout = '.button-container > .button-medium > span'

proceedToCheckout() {
    cy.get(this.proceed_to_checkout, {timeout: 10000}).click();    
}
verifyNameOfItemInPage(name: string) {
    return cy.get('.cart_description > .product-name > a').should("have.text", name);
  }
}

