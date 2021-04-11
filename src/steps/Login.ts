import { Given, Then, When } from "@cucumber/cucumber";
import { actorCalled, actorInTheSpotlight, List, Transform } from "@serenity-js/core";
import {  Navigate, UseAngular  } from "@serenity-js/protractor";
import {  EnterCredencials  } from "../tasks/enterCredencials";
import {  UsuarioBuilder  } from "../builders/UsuarioBuilder";
import {  validarRespuesta  } from "../questions/Validate";
import { Ensure, equals } from "@serenity-js/assertions";
Given('que {string} ingrese a facebook', (actorName: string)  =>
actorCalled(actorName).attemptsTo(
  UseAngular.disableSynchronisation(),
  Navigate.to('https://www.facebook.com')));

  
When('ingrese sus credenciales',(table) =>
actorInTheSpotlight().attemptsTo(EnterCredencials
  .withData(UsuarioBuilder
  .email(table.rowsHash()['correo'])
  .yClave(table.rowsHash()['clave']))));
    
 
Then('validará su perfil {string}', (alerta:string) =>
actorInTheSpotlight().attemptsTo(
    Ensure.that(validarRespuesta(),equals(alerta))));