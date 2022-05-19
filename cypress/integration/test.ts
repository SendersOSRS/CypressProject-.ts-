
import { random, xorBy } from "cypress/types/lodash";
import { createDocumentRegistry } from "typescript";
import { commands } from "../support/commands";
const user = require("../fixtures/signUpInfo");
const dress = require("../fixtures/dresses");

const demo = new commands();


//Change .createEmail('xxxxxxxxx) to create a new account


  context ('Demo Test', () => {
    beforeEach (() => {
      demo.navigateToURL("http://automationpractice.com/index.php")
      it('to make sure it has Correctly rendered the demo website link', () => {
        cy.findByText('Automation Practice Website').should('exist')
      })
    })

it("Purchase a specific Dress", () => {
  demo.navigateToSignInPage();
  demo.enterEmailAddressAndProceedToCreateAccount("Koray@hotmail.com");
  const x = demo.random();
  demo.completeRegistrationFields(
    user[x].first_name,
    user[x].last_name,
    user[x].password,
    user[x].address,
    user[x].city,
    user[x].state,
    user[x].zip_code,
    user[x].mobile_phone,
    user[x].alias
  );
  demo.navigateToDressPage();
  demo.addASpecificDressToBasket(dress[0].locator);
  demo.navigateToCheckout();
  demo.verifyShoppingCartSummary(dress[0].name);
  demo.navigateToAddressDetailsPage();
  demo.verifyAddressDetails('Leave parcel behind gate, if no one answers the door.');
  demo.navigateToShippingDetailsPage(); 
  demo.verifyShippingMethod(user[x].address); 
  demo.navigateToPaymentsPage();
  demo.choosePaymentMethod();
  demo.verifyOrderSummary();
  // demo.confirmOrder();
  // demo.proceedToCheckout('Leave parcel behind gate, if no one answers the door.');
});
})



// demo.choosePaymentMethod
// demo.confirmOrder

