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

console.log("~. ~ . ~ . ~ . Esercizio 2 . ~ . ~ . ~ . ~");

const pets = [];

class Pet {
  constructor(name, owner, species, breed) {
    this.petName = name;
    this.ownerName = owner;
    this.species = species;
    this.breed = breed;
  }
}

const formShop = document.getElementById("formShop");
formShop.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const ownerInput = document.getElementById("ownerName");
  const speciesInput = document.getElementById("species");
  const breedInput = document.getElementById("breed");
  const newPet = new Pet(nameInput.value, ownerInput.value, speciesInput.value, breedInput.value);
  pets.push(newPet);
  console.log(newPet);
  console.log(pets);
});
