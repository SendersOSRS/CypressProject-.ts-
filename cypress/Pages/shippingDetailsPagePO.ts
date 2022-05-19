export class shippingDetailsPagePO {
  
click_checkout_button = '.cart_navigation > .button > span'
agree_to_TOS = '#cgv'

clickCheckoutButton() {
cy.get(this.click_checkout_button).click();
}
clickToAgreeTOS() {
cy.get(this.agree_to_TOS).click();
}
verifyAddress(address: string) {
cy.get('.delivery_options_address').contains('.carrier_title', address);
}
}
