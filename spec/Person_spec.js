let myTest = require("../src/Person");

describe("function 'Hello' in a class 'Person'", function () {
  let person = new myTest.Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives'])

  let myExpect = `Hello, my name is Ryan and I am 30 years old. I'm a male My interests are being a hardarse,agile,ssd hard drives`

  it("returns greeting", function () {
    expect(person.Hello()).toEqual(myExpect);
  });

});

