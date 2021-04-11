import { Question } from "@serenity-js/core";
import { Text } from "@serenity-js/protractor";
import { Login } from "../ui/Login";


export const ActualLoginMessage = () => Question.about("#actor gets the invalid login message",
    actor => Text.of(Login.forgotPassword).answeredBy(actor) as PromiseLike<string>
);

export const validarRespuesta = () => Text.of(Login.forgotPassword);