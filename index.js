// requiring our Team module exported from team.js
const Team = require("./team.js");

const fs = require("fs");

// creating and storing a new Team object
const team = new Team("Object Oriented Programming");

// read the file input
const lineReader = require("readline").createInterface({
  input: fs.createReadStream("members.txt")
});

lineReader
  .on("line", function(line) {
    const member = line.split(",");
    team.addProgrammer(member[0], member[1], member[2], member[3]);
  })
  .on("close", process);

function process() {
  for (let i = 0; i < team.programmerCount(); i++) {
    team.programmerarray[i].printInfo();
  }
  console.log("There are " + team.programmerCount() + " team members.");
}
