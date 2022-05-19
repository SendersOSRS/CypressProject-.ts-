import { random } from "cypress/types/lodash";

export class signInPO {

  create_email = "#email_create";
  click_create = "#SubmitCreate > span";

  rand() {
   return Math.floor((Math.random() * 1000000000) +1);
  }  

  typeEmail(email: string) {
    cy.get(this.create_email).type(this.rand()+email);
  }
  clickCreate() {
    cy.get(this.click_create).click();
  }
}
