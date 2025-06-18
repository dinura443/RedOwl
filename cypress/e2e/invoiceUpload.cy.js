import { AiAdminLogin } from "../../page-objects-and-services/loginPageObjects";
import { NavbarPageObjects } from "../../page-objects-and-services/navbarPageObjects";
import { MyAgentPageObjects } from "../../page-objects-and-services/myAgentPageObjects";
import { payableAssistantsChatPageObjects } from "../../page-objects-and-services/pAAssistantChatPageObjects";

const aiAdminLogin = new AiAdminLogin();
const navbarPageObjects = new NavbarPageObjects();
const myAgentPageObjects = new MyAgentPageObjects();
const payableAssistantsChat = new payableAssistantsChatPageObjects();

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Upload an invoice to the account pyable assistant chat', () => {

  beforeEach(() => {
    aiAdminLogin.createSession();
  });

  it('Navigate to the chat and upload the invoice', () => {
    aiAdminLogin.visitDashboardPage();
    cy.wait(10000);
    navbarPageObjects.clickMyAgentButton();
    cy.wait(1000);
    myAgentPageObjects.navigateToWorkerAgentSubmenu();
    cy.wait(1000);
    myAgentPageObjects.enterMyAgentSubMenuSearchBarText('Account Payable Assistant');
    cy.wait(1000);
    myAgentPageObjects.clickAPAssistantChatButton();
    cy.wait(1000);
    payableAssistantsChat.AttachFileButton("Copy_of_Harvey_Norman_New_(3)[1] (1).pdf");
    cy.wait(1000000);


  });


});