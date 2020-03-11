class Person{
    constructor(name, age, gender, intrests){
      this.name = name
      this.age = age
      this.gender = gender
      this.intrests = intrests
    }
    hello(){
      return (`Hello, my name is ${this.name} and I am ${this.age} years old. I'm a ${this.gender} My interests are ${this.intrests}`)
    }
  }
 
  let person = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives'])
  let greeting = person.hello()
  console.log(greeting)


module.exports = {Person}