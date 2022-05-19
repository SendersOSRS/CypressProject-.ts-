export class paymentPagePO {

click_checkout_button = '.cart_navigation > .button > span'
pay_by_bank_wire = '.bankwire'

clickCheckoutButton() {
cy.get(this.click_checkout_button).click();
}
payByBankWire() {
    cy.get(this.pay_by_bank_wire).click();
}
    
}