/* 
* Crea una clase para un usuario (User). Los usuarios deben de tener las propiedaddes de:
  * username
  * password
  * email
  * isOnline

* Se debe de validar que los usuarios tengan un correo valido (en este caso que contenga un arroba @)
  * Esta debe de ser una funcion que regrese true en caso de ser un correo valido y false en caso de no serlo.
*/

class User {
  constructor(username, password, email, isOnline){
    this.username = username;
    this.password = password;
    this.email = email;
    this.isOnline = isOnline;
  }

  isValid() {
    // if(this.email.includes('@')) {
    // if(this.email.indexOf('@') > -1) {
    // if(this.email.indexOf('@') !== -1) {
    //   return true;
    // }
    // return false;

    return this.email.includes('@');
  }
}


//usuario1.validEmail() // true o false

const user1 = new User("yaxche", "password", "yaxche@mail.com", true);
console.log(user1)

const user2 = new User("Susana", "contraseña", "susanamail.com", true);
console.log(user2)