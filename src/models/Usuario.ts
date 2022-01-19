export class Usuario{
  
    private email: string;
    private clave: string;
    
    public getUsuario(): string {
        return this.email;
    }

    public setUsuario(email: string): void {
        this.email = email;
    }

    public getClave(): string {
        return this.clave;
    }

    public setClave(clave: string): void {
        this.clave = clave;
    }  
}