function Employee(name,age,salary){
    const employee = Object.create(Employee.prototype);
    employee.name = name;
    employee.age = age;
    employee.salary = salary;

    return employee;
}

Employee.prototype.displayName = function(){
    return this.name;
};

Employee.prototype.increaseAge = function(){
    this.age += 1;
    return this.age;
};

Employee.prototype.decreaseAge = function(){
    this.age -= 1;
    return this.age;
};

function Manager(name,age,salary,department){
    const manager = Employee(name,age,salary);
    manager.department = department;

    Object.setPrototypeOf(manager, Manager.prototype);
    return manager;
}

Manager.prototype.displayDepartment = function(){
    return this.department;
};

Manager.prototype.decreaseSalary = function(employee,amount){
    employee.salary -= amount;
    return employee.salary;
};

Manager.prototype.increaseSalary = function(employee,amount){
    employee.salary += amount;
    return employee.salary;
};


Manager.prototype.__proto__ = Employee.prototype;


const emp1 = Employee('john Doe',35,35000);
console.log(emp1.displayName());
console.log(emp1.increaseAge());
console.log(emp1.decreaseAge());

const manager1 = Manager('Asmith Rane',40,68000,'Sales department');
console.log(manager1.displayName());
console.log(manager1.displayDepartment());
console.log(manager1.increaseSalary(emp1,4000));
console.log(manager1.decreaseSalary(emp1,1500));
