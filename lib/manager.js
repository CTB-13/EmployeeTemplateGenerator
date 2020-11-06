var Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber    
    };

    //returns office number
    getOfficeNumber(){
        return(this.officeNumber)
    };

    //returns Manager role
    getRole(){
        return('Manager')
    };
}

module.exports = Manager;