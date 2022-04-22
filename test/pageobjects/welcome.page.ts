import Helper from "../../support/helper"

export class WelcomePage extends Helper {
    public get signInBtn() { 
        return $('android=new UiSelector().resourceId("signin-button-text")') 
    }
    public get registerBtn() { 
        return $('android=new UiSelector().resourceId("register-account-button-text")') 
    }
    public get shopAsGuestBtn() { 
        return $('android=new UiSelector().resourceId("shop-as-guest-button-text")') 
    }
}