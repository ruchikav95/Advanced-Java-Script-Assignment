//class for creating Programmer objects
class Programmer {
  constructor(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
  }
  printInfo() {
    console.log(
      `Name:${this.name}
       Position:${this.position}
       Age:${this.age}
       Language:${this.language}`
    );
  }
}

// exporting our Programmer constructor
module.exports = Programmer;
