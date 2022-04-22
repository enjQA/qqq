import { RegisterPage } from "../pageobjects/register.page";
import allureReporter from "@wdio/allure-reporter";
import "dotenv/config";

const registerPage = new RegisterPage();

describe('The account registration', () => {
    it('Should register an account with valid credentials', async () => {
        allureReporter.startStep('Should move to the Register page')
        await registerPage.tapRegisterBtn();
        expect(await registerPage.registerPageHeader).toHaveText('Register account')
        allureReporter.endStep("passed");
        allureReporter.startStep('Fill the credentials');
        await registerPage.fillRegisterFullName(process.env.FULLNAMEREGISTER);
        await registerPage.fillRegisterEmail(process.env.EMAILREGISTER);
        await registerPage.fillRegisterPassword(process.env.PASSWORDREGISTER);
        expect(await registerPage.registerBtn).toBeEnabled();
        allureReporter.endStep("passed");
        allureReporter.startStep('Register the account');
        await registerPage.tapRegisterAccount();
        expect(await registerPage.signInEmailInput).toBeExisting();
        allureReporter.endStep("passed")
    });
});


