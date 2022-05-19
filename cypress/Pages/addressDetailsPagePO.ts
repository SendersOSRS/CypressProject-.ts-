export class addressDetailsPagePO {

    click_checkout_button = '.cart_navigation > .button > span'
    delivery_instructions = '#ordermsg > .form-control'
   

clickCheckoutButton() {
    cy.get(this.click_checkout_button).click();
}
deliveryInstructions(instructions: string) {
    cy.get(this.delivery_instructions).type(instructions);
}
}