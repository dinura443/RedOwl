export class NavbarPageObjects {

    private myAgentBtn = "(//a[@data-cy='primarySideMenuItem-myagent'])[1]"
    private agentMarketPlaceBtn = "(//a[@class='flex items-center font-medium px-5 py-3 justify-between bg-white hover:bg-gray10 border-l-wlg border-brandPrimary !bg-gray10 bg-white hover:bg-gray10 border-l-wlg border-brandPrimary !bg-gray10'])[1]"
    private tasks = "(//a[@data-cy='primarySideMenuItem-tasks'])[1]"
    private knowledge = "(//a[@data-cy='primarySideMenuItem-knowledge'])[1]"
    private dashboards = "(//a[@data-cy='primarySideMenuItem-dashboards'])[1]"
    private records = "(//a[@data-cy='primarySideMenuItem-records'])[1]"

    public clickMyAgentButton() {

        cy.xpath(this.myAgentBtn)
            .click();

        return this;
    }

    public clickAgentMarketPlaceButton() {

        cy.xpath(this.agentMarketPlaceBtn)
            .click();

        return this;
    }

    public clickTasksButton() {

        cy.xpath(this.tasks)
            .click();

        return this;
    }

    public clickKnowledgeButton() {

        cy.xpath(this.knowledge)
            .click();

        return this;
    }
    public clickDashboardsButton() {

        cy.xpath(this.dashboards)
            .click();

        return this;
    }
    public clickRecordsButton() {

        cy.xpath(this.records)
            .click();

        return this;
    }


}