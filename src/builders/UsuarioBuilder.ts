import { UsuarioInterface } from "../interfaces/UsuarioInterface";
import { Usuario } from "../models/Usuario";
export class UsuarioBuilder implements UsuarioInterface{
    private email: string;
    private clave:string;

    constructor(email: string) {
        this.email=email;
     }
     static email(email: string) {
        return new UsuarioBuilder(email);
     }
     public yClave(clave: string) {
        this.clave=clave;
        return this.build();
     }
     build(): Usuario {    
      var user= new Usuario();
      user.setClave(this.clave);
      user.setUsuario(this.email);
      return user; 
}
}