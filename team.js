// requiring our Programmer module exported from programmer.js
const Programmer = require("./programmer.js");

//class for creating Team objects
class Team {
  constructor(projectname) {
    this.projectname = projectname;
    this.programmerarray = [];
  }

  addProgrammer(name, position, age, language) {
    this.programmerarray.push(new Programmer(name, position, age, language));
  }

  programmerCount() {
    return this.programmerarray.length;
  }
}

// exporting our Team constructor. We will require it in index.js
module.exports = Team;
