
// Objects Handling.

const person = {
    name:"Jhon"
};

//Method one to update the object
const updatedPerson = Object.assign({}, person,
    {
        name: "Ali",
        age: 30
    }
);

//Second Methodto updtae the object
const Updated = {...person, name:"Bob"};


console.log(updatedPerson);
console.log(Updated);
console.log(person);

const employee  = {
    name: "Ali",
    address: {
        country: "pakistan",
        city:"Lahore"
    }
};

const updateEmployee = {
    ...employee,
    address:{
        ...employee.address,
        city:"Karachi"
    },
    name: "Bob",
};

console.log(employee);




