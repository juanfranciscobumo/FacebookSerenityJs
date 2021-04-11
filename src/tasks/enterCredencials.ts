import { PerformsActivities, Task, UsesAbilities } from "@serenity-js/core";
import { Click, Enter } from '@serenity-js/protractor';
import { Usuario } from "../models/Usuario";
import { Login } from "../ui/Login";

export class EnterCredencials implements Task {
    private email: string;
    private clave: string;
    constructor(private user: Usuario) {
        this.email = user.getUsuario();
        this.clave = user.getClave();
    }
    static withData(user: Usuario) {
        return new EnterCredencials(user);
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(Enter.theValue(this.email).into(Login.user),
            Enter.theValue(this.clave).into(Login.password),
            Click.on(Login.btnInto))
    }

}