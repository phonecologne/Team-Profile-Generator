const Employee = require('./Employee');
//lastly we need the manager info
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //collecting the manager name email and office location
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    //switching the role over to manager
    getRole() {
        return "Manager";
    }
}

//moving the info to the html doc
module.exports = Manager;