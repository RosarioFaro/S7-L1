console.log("~. ~ . ~ . ~ . Esercizio 1 . ~ . ~ . ~ . ~");

class User {
  constructor(firstName, surname, age, location) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
    this.location = location;
  }

  compareAge(userAlt) {
    if (this.age < userAlt.age) {
      return this.firstName + " è più giovane di " + userAlt.firstName;
    } else if (this.age > userAlt.age) {
      return this.firstName + " è più vecchio di " + userAlt.firstName;
    } else {
      return this.firstName + " e " + userAlt.firstName + " hanno la stessa età";
    }
  }
}

const user1 = new User("Pippo", "Franco", 84, "Roma");
const user2 = new User("Christian", "De Sica", 74, "Roma");
const user3 = new User("Renato", "Pozzetto", 84, "Milano");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));
console.log(user1.compareAge(user3));
