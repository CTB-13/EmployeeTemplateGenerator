var Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github,){
        super(name, id, email);
        this.github = github;   
    };

    //returns github username
    getGithub(){
        return(this.github)
    
    };
    
    //returns Engineering role
    getRole(){
        return('Engineer')
    };

    
}

module.exports = Engineer;