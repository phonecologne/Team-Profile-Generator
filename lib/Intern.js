//now moving to the intern info
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor (name, id, email, school) {
        //collecting intern name and college
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }
//and now we collect the intern role
    getRole () {
        return "Intern";
    }
}
//moving all the info for the html doc to collect
module.exports = Intern; 