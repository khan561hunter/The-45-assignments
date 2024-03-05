//Five tests that would print TRUE
var car = 'subaru';
//test 1
console.log("Is car == 'subaru' ?");
console.log(car == 'subaru');
//test 2
console.log("Is car == 'SUBARU' ?");
console.log(car.toUpperCase() == 'SUBARU');
//test 3
console.log("Is car == 'Subaru' ?");
console.log((car.charAt(0).toUpperCase() + car.slice(1)) == 'Subaru');
//test 4
console.log("is car !== '1subaru' ?");
console.log(car !== '1subaru');
//test 5
console.log("is car == 'subaru5' ?");
console.log((car + 5) == 'subaru5');
//test 6
console.log("Is car == 'SUBARU' ?");
console.log(car == 'SUBARU');
//test 7
console.log("Is car !== 'subaru' ?");
console.log(car !== 'subaru');
//test 8 
console.log("Is car == 'honda' ?");
console.log(car == 'honda');
//test 9
console.log("Is car == 'subaru10' ?");
console.log(car == 'subaru10');
//test 10
console.log("Is car == 'CiviC' ? ");
console.log(car == 'CiviC');
