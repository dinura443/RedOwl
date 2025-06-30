export class KualiteeLoginPage {
    private txt_email = "(//input[@id='email_id'])[1]";
    private txt_password = "(//input[@id='password'])[1]";
    private txt_subdomain = "//input[@name='subdomain']";
    private btn_login = "(//input[@value='Log in'])[1]";
  
    public visitLoginPage() {
      cy.visit('https://redowl.kualitee.com');
      return this;
    }
  
    public enterEmail(email: string) {
      cy.xpath(this.txt_email).clear().type(email);
      return this;
    }
  
    public enterPassword(password: string) {
      cy.xpath(this.txt_password).clear().type(password);
      return this;
    }
  
    public enterSubdomain(subdomain: string) {
      cy.xpath(this.txt_subdomain).clear().type(subdomain);
      return this;
    }
  
    public clickLoginButton() {
      cy.xpath(this.btn_login).click();
      return this;
    }
  
    public createSession() {
      cy.session('kualiteeLogin', () => {
        const email = 'naveendra@redowl.ai';
        const password = 'Naveendra1234';
  
        this.visitLoginPage()
          .enterEmail(email)
          .enterPassword(password)
          .clickLoginButton();
  
        cy.wait(1000);
      });
  
      return this;
    }
  }
  