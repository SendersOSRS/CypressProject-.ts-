export class homePagePO {

  sign_in = ".login";
  
  clickSignInButton(){
  cy.get(this.sign_in).click();
  }

}
