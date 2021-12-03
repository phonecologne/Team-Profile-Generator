// collecting and moving the engineer info to the index html doc
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // collecting the engineer name for the index doc
        super (name, id, email);

        this.github = github; 
    }

    // collecting the githib username
    getGithub () {
        return this.github;
    }

     // engineer role generated for the html doc
    getRole () {
        return "Engineer";
    }
}

//moving all the info to the html file
module.exports = Engineer; 