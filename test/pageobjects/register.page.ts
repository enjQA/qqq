import { SignInPage } from "./signIn.page";

export class RegisterPage extends SignInPage {
    public get fullRegisterNameInput() { 
        return $('android=new UiSelector().resourceId("ras-register-name-ti")'); 
    }

    public get registerEmailInput() {
        return $('android=new UiSelector().resourceId("ras-register-email-ti")');
    }

    public get registerPasswordInput() {
        return $('android=new UiSelector().resourceId("ras-register-password-ti")');
    }

    public get registerAccountBtn() {
        return $('android=new UiSelector().resourceId("click-to-register-button-touchable")');
    }

    public get registerPageHeader() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView')
    }

    public get continueRegisterBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button');
    }

    public async tapRegisterBtn() {
        await super.registerBtn.click();
    }

    public async tapContinueRegisterBtn() {
        await this.continueRegisterBtn.click()
    }

    public async fillRegisterFullName(fullName: string) {
        await this.fullRegisterNameInput.setValue(fullName)
    }

    public async fillRegisterEmail(email: string) {
        await this.registerEmailInput.setValue(email)
    }

    public async fillRegisterPassword(password: string) {
        await this.registerPasswordInput.setValue(password)
    }

    public async tapRegisterAccount() {
        await this.registerAccountBtn.click();
    }
} 
