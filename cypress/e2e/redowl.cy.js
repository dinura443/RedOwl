import { AiAdminLogin } from "../../page-objects-and-services/loginPageObjects";
import { logToTerminal } from "../support/logger";
import { NavbarPageObjects } from "../../page-objects-and-services/navBarObjects";

const aiAdminLogin = new AiAdminLogin();
const navbarPageObjects = new NavbarPageObjects();

Cypress.on('uncaught:exception', () => false);

describe('Invoice operation', () => {
  beforeEach(function () {
    const failed = Cypress.env('fileSetupFailed');
    if (failed) {
      logToTerminal('Skipping test because file setup failed.');
      this.skip();
    }

    aiAdminLogin.createSession();
    cy.log('Logging in as AI Admin');
    logToTerminal('Logging in as Grace');
  });

  it('simulate a passing test case for kualitee reporting ', () => {
    aiAdminLogin.visitDashboardPage();
    cy.wait(10000);
    navbarPageObjects.clickMyAgentButton();
    cy.wait(1500);
   // navbarPageObjects.clickAgentMarketPlaceButton();
    //cy.wait(1500);
    navbarPageObjects.clickTasksButton();
    cy.wait(1500);
    navbarPageObjects.clickKnowledgeButton();
    cy.wait(1500);
    navbarPageObjects.clickDashboardsButton();
    cy.wait(1500);
    navbarPageObjects.clickRecordsButton();
    cy.wait(1500);
  });


  xit('Simulate a failed test case for Kualitee reporting', () => {
    expect(true).to.equal(false); // Intentionally fail the test
  });
  
  afterEach(function () {
    const testStatus = this.currentTest.state === 'passed' ? 'pass' : 'fail';

    // Replace with your actual Kualitee data
    const kualiteePayload = {
      project_id: '19119',
      token: '7ea961769dff370228db0badac142344',
      status: testStatus,
      tc_id: ['770107'],  // You can map this dynamically if needed
    };

    cy.task('postKualiteeResult', kualiteePayload).then(response => {
      logToTerminal(`Kualitee test case updated: ${JSON.stringify(response)}`);
    });
  });
});
