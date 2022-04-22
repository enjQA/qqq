export const config = {
    // TS compiler options
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'test/tsconfig.json'
        }
    },

    // For BrowserStack
    // user: process.env.BROWSERSTACK_USER,
    // key: process.env.BROWSERSTACK_ACCESS_KEY,

    // WebdriverIO options
    port: 4724,
    runner: 'local',
    specs: ['./test/specs/**/*.ts'],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            platformVersion: '11',
            appPackage: 'com.buysocial',
            appActivity: 'com.buysocial.MainActivity',
            automationName: 'UiAutomator2'
        }
    ],
    services: [
        ['appium',
            {args: {
                    relaxedSecurity: true
                    },
            command: 'appium'
            }
        ]
    ],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: [
        [   
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // Hooks 
    afterTest: async function(test: Record<string, unknown>, context: Record<string, unknown>, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }

}
