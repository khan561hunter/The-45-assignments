
let person: {
    name:string;
    class:string;
    age:number;
    address:{
        residence:string;
        street : string;
    };
};
person = {
    name : 'wania',
    class : 'Altaf agha',
    age : 18,
    address : {
        residence: 'A-302,dawood terrace',
        street : 'gulshan-e-iqbal'
    }
}
console.log(person.address.street);
console.log(person.age);
