import { WelcomePage } from "./welcome.page";

export class SignInPage extends WelcomePage {
    public get signInEmailInput() {
        return $('android=new UiSelector().resourceId("username")');
    }

    public get signInPasswordInput() {
        return $('android=new UiSelector().resourceId("password")');
    }

    public get continueSignInBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.Button');
    }             

    public get continueWithGoogleBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[5]/android.widget.Button');
    }

    public get continueWithAppleBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[6]/android.widget.Button');
    }

    public get continueWithFacebookBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[7]/android.widget.Button');
    }

    public async tapSignInBtn() {
        await super.signInBtn.click();
    }

    public async fillEmail(email: string) {
        await this.signInEmailInput.setValue(email);
    }

    public async fillPassword(password: string) {
        await this.signInPasswordInput.setValue(password);
    }

    public async tapContinueBtn() {
        await this.continueSignInBtn.click();
    }
}