export class AiAdminLogin{

    private txt_email = "//input[@id='username']"
    private txt_password = "//input[@id='password']"
    private btn_login = "//input[@id='kc-login']"

    public visitLoginPage() {

       cy.visit('https://admin-dev1.redowl.io/');

       return this;
    }

    public visitDashboardPage() {
        cy.visit('https://admin-dev1.redowl.io/qbitum');

        return this;
    }

    public enterEmail(email: string) {
        cy.xpath(this.txt_email)    
        .type(email);
 
        return this;
    }
    
    public createSession(){
        cy.session('aiAdminLogin', () => {
            this.visitLoginPage()
              .enterEmail('info@multiplex.net')
              .enterPassword('Multiplex@123')
              .clickLoginButton();
      
      
              this.visitDashboardPage();
              cy.wait(5000);
      
          });
    }
    public enterPassword(password: string) {
        cy.xpath(this.txt_password)
        .type(password);

        return this;
    }

    public clickLoginButton() {
        cy.xpath(this.btn_login)
        .click();

        return this;
    }
}