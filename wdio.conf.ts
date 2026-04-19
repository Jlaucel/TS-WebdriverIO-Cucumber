import type { Options } from '@wdio/types'
import path from 'node:path'

export const config: Options.Testrunner = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: path.join(process.cwd(), 'tsconfig.json'),
            transpileOnly: true
        }
    },
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
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    cucumberOpts: {
        // En WDIO v9 con ESM, preferimos usar 'import' con rutas absolutas
        import: [path.join(process.cwd(), 'features/step-definitions/*.ts')],
        timeout: 60000
    },
    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            await browser.takeScreenshot();
        }
    }
}
