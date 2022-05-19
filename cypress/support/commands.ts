
import '@testing-library/cypress/add-commands';
import { createAccountPO } from "../Pages/createAccountPO";
import { homePagePO } from "../Pages/homePagePO";
import { signInPO } from "../Pages/signInPO";
import { dressPagePO } from "../Pages/dressPagePO";
import { addressDetailsPagePO } from '../Pages/addressDetailsPagePO';
import { paymentPagePO } from '../Pages/paymentpagePO';
import { shippingDetailsPagePO } from '../Pages/shippingDetailsPagePO';
import { shoppingCartSummaryPO } from '../Pages/shoppingCartSummaryPO';
import { orderSummaryPO } from '../Pages/orderSummaryPO';

const createAccount = new createAccountPO();
const homePage = new homePagePO();
const signIn = new signInPO();
const dressProductPage = new dressPagePO();
const addressDetails = new addressDetailsPagePO();
const paymentMethod = new paymentPagePO();
const shippingDetails = new shippingDetailsPagePO();
const shoppingCart = new shoppingCartSummaryPO();
const orderSummary = new orderSummaryPO();
// const dress = require("../fixtures/dresses");

export class commands {

//assign INT method

random() {
return Math.floor(Math.random() * 3)    
}

//Navigation methods

navigateToURL(url: string) {
cy.visit(url);
}
navigateToSignInPage() {
homePage.clickSignInButton();   
}
navigateToDressPage() {
dressProductPage.clickDressPage();
}
navigateToCheckout() {
shoppingCart.proceedToCheckout();
}
navigateToAddressDetailsPage() {
addressDetails.clickCheckoutButton();
}
navigateToShippingDetailsPage() {
shippingDetails.clickCheckoutButton();
}
navigateToPaymentsPage() {
paymentMethod.clickCheckoutButton();
}

//Registration methods

enterEmailAddressAndProceedToCreateAccount(email: string){
signIn.typeEmail(email);
signIn.clickCreate();   
}
completeRegistrationFields(firstName: string, lastName: string, password: string, address: string, city: string, state: string, zipcode: string, mobile: string, alias: string) {
createAccount.clickMrRadio();
createAccount.firstNameInputField(firstName);
createAccount.lastNameInputField(lastName);
createAccount.passwordInputField(password);
createAccount.addressInputField(address);
createAccount.cityInputField(city);
createAccount.stateDropdown(state);
createAccount.zipCodeInputField(zipcode);
createAccount.mobileInputField(mobile);
createAccount.aliasInputField(alias);
createAccount.clickRegisterBtn();
}

//Dress Page methods

addASpecificDressToBasket(locator: string) {
dressProductPage.addToCart(locator);
}

//Checkout (Page + verification) methods

verifyShoppingCartSummary(name: string) {
shoppingCart.verifyNameOfItemInPage(name);
}
verifyAddressDetails(instructions:string) {
addressDetails.deliveryInstructions(instructions)   
}
verifyShippingMethod(address: string) {
shippingDetails.clickToAgreeTOS();
shippingDetails.verifyAddress(address);
}
verifyOrderSummary() {
orderSummary.verifyTitle();
// orderSummary.verifyPaymentMethod();
}

//Payment methods

choosePaymentMethod() {
paymentMethod.payByBankWire();
}




// proceedToCheckout(instructions: string) {
// checkoutPage.proceedToCheckout();
// checkoutPage.clickCheckoutButton();
// checkoutPage.deliveryInstructions(instructions);
// checkoutPage.clickCheckoutButton();
// checkoutPage.clickToAgreeTOS();
// checkoutPage.clickCheckoutButton();
// checkoutPage.payByBankWire();
// checkoutPage.clickConfirmOrder();
// }


}


