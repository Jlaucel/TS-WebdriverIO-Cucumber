import type { Options } from '@wdio/types'
import path from 'node:path'
import fs from 'node:fs'
import allure from '@wdio/allure-reporter'

export const config = {
    runner: 'local',
    logLevel: 'debug',
    specs: [
        path.join(process.cwd(), 'features/**/*.feature')
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu']
        }
    }],
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        useCucumberStepReporter: true,
        disableWebdriverScreenshotsReporting: false,
        disableWebdriverStepsReporting: true
    }]],
    cucumberOpts: {
        require: ['./features/step-definitions/*.ts'],
        timeout: 60000
    },
    afterStep: async function () {
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment('Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
    },
    onPrepare: function () {
        if (fs.existsSync('allure-results')) {
            fs.rmSync('allure-results', { recursive: true, force: true });
        }
    }
}
