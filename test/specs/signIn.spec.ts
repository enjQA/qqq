import { SignInPage } from "../pageobjects/signIn.page";
import { ProfilePage } from "../pageobjects/profile.page";
import allureReporter from "@wdio/allure-reporter";
import "dotenv/config";

const signInPage = new SignInPage();
const profilePage = new ProfilePage();

describe('Customer should login to his account', () => {
    afterEach(async() => {
        allureReporter.startStep('Postcondition: Sign Out from the account');
        await profilePage.tapProfileBtn();
        await profilePage.tapSignOutBtn();
        expect(await profilePage.shopAsGuestBtn).toBeExisting();
        allureReporter.endStep('passed')
    })

    it('Should Sign In with the valid credentials', async() => {
        allureReporter.startStep('Should move to the Sign In page');
        await signInPage.tapSignInBtn();
        expect(await signInPage.signInEmailInput).toBeExisting();
        allureReporter.endStep('passed');
        allureReporter.startStep('Should Sign In to account');
        await signInPage.fillEmail(process.env.EMAILSIGNIN);
        await signInPage.fillPassword(process.env.PASSWORDSIGNIN);
        await signInPage.tapContinueBtn();
        expect(await profilePage.cartIcon).toBeExisting();
        allureReporter.endStep('passed');
    })
})