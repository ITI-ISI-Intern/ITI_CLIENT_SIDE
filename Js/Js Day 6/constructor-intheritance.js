
function Employee(name,age){
    this.name=name
    this.age=age
}

function Developer(name,age,specialization){
    Employee.call(this,name,age)
    this.specialization=specialization
}

Developer.prototype  = Object.create(Employee.prototype)
Developer.prototype.constructor=Developer

const dev = new Developer('Alice', 30, 'Frontend');
console.log(dev instanceof Developer); 
console.log(dev instanceof Employee);