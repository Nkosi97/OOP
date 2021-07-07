class Person {
  constructor(name, age, interests, gender) {
    this.name = name;
    this.age = age;
    this.interests = interests;
    this.gender = gender;
  }

  hello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interests}`;
  }
}

let person = new Person("Ryan", 30,["being a hardarse"," agile and ssd hard drives."]);
let greeting = person.hello();
console.log(greeting);

module.exports = { Person };
