export class orderSummaryPO {


verifyTitle() {
return cy.get('.page-heading').should("have.text", '\n    Order summary\n');
}
// verifyPaymentMethod() {
//     return cy.get('.page-subheading').should("have.text", )
//     }      
}

