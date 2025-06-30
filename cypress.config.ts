import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';
import installLogsPrinter from 'cypress-terminal-report/src/installLogsPrinter';
import * as dotenv from 'dotenv';
dotenv.config();
const axios = require('axios');






export default defineConfig({


  chromeWebSecurity: false,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    grepOmitFiltered: true,
    grepFilterSpecs: true,
    allure: true,
    allureCleanResults: true,
    allureSkipCommands: 'wrap,screenshot,wait',
    allureResults: 'allure-results',
    allureAttachRequests: true,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec, mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/report/mochawesome-report',
      reportFilename: "[datetime]-[name]-report",
      timestamp: "isoUtcDateTime",
      overwrite: false,
      html: true,
      json: true,
    },
  },

  e2e: {
    fixturesFolder: 'cypress/fixtures',
    defaultCommandTimeout: 3000,
    video: false,

    setupNodeEvents(on, config) {
      installLogsPrinter(on);
      
      // Add Cypress Grep Plugin
      require('@cypress/grep/src/plugin')(config);

      // Add Cypress Terminal Report Plugin
      require('cypress-terminal-report/src/installLogsPrinter')(on);

      // Add Allure Adapter Plugin
      const reporter = configureAllureAdapterPlugins(on, config);



      on('task', {
        log(message: string) {
          console.log(`[LOG]: ${message}`);
          return null;
        }
      });



      on('task', {
        postKualiteeResult({ project_id, token, status, tc_id }) {
          return axios.post('https://apiss.kualitee.com/api/v2/test_case_execution/change_status', {
            project_id,
            token,
            status,
            tc_id,
          }).then((res: { data: any }) => {
            console.log('Kualitee API Response:', res.data);
            return res.data;
          }).catch((err: any) => {
            console.error('Kualitee API Error:', err.response?.data || err.message);
            throw err;
          });
        }
      });
      


      on('before:run', (details) => {
        reporter?.writeEnvironmentInfo({
          info: {
            os: details.system.osName,
            osVersion: details.system.osVersion,
            browser: `${details.browser?.displayName} ${details.browser?.version}`,
            ...config.env,
          },
        });

        reporter?.writeCategoriesDefinitions({ categories: './allure-error-categories.json' });
      });

      // Task to get the latest file in a directory
      


      return config;
    },
  },
});