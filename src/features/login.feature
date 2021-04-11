#language: es
Característica: Comprobar sesión en facebook

  Esquema del escenario: Comprobar sesión
    Dado que '<actor>' ingrese a facebook
    Cuando ingrese sus credenciales
      | correo | <correo> |
      | clave  | <clave>  |
    Entonces validará su perfil '<perfil>'

    Ejemplos:
      | actor | correo                | clave      | perfil              |
      | James | pacho0323@hotmail.com | .pacho0323 | Juan Builes Montoya |