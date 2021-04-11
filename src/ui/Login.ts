import { Target } from "@serenity-js/protractor";
import { By } from "protractor";

export class Login{
    static user=Target.the("Login").located(By.id("email"));
    static password=Target.the("Password").located(By.id("pass"));
    static btnInto=Target.the("BotonIngresar").located(By.xpath("//button"));
    static forgotPassword=Target.the("Forgot password").located(By.xpath("//span[contains(text(),'Juan Builes Montoya')]"));
}