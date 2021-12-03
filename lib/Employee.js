class Employee {
    constructior (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    //finding the inputed user info to get the employee name
    getName () {
        return this.name;
    }

    //same for the employee ID
    getId () {
        return this.id;
    }

    //doing it now for employee email
    getEmail () {
        return this.email;
    }

    //and finally getting the role of the Employee to complete the team
    getRole () {
        return 'Employee';
    }
};

//and now we push this info into the index html
module.exports = Employee;