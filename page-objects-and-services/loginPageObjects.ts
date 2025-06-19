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
            console.log('Creating session for AI Admin Login');
            this.visitLoginPage()
            
              .enterEmail('info@multiplex.net')
              .enterPassword('Multiplex@123')
              .clickLoginButton();

              console.log('Session created successfully');

      
      
              this.visitDashboardPage();
              console.log('Dashboard page visited successfully');
              cy.wait(1000);
      
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