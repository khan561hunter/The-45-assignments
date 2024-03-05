// Test for equality and inequality 
//For True :
console.log("black" === "black");
//For False : 
console.log("Black" !== 'Black');
//Test for lowercase 
//For True : 
var honda = 'HONDA';
console.log(honda.toLowerCase() == 'honda');
//For false :
console.log(honda.toLowerCase() !== 'honda');
//Test for Numerical tests involving equality and inequality
// greater than and less than, greater than or equal to, and less than or equal to
//numerical test of equality and inequality (true) : 
console.log("numerical true test for equality :", 5 == 5);
console.log("numerical true test for inequality", 6 !== 8);
//numerical test of equality and inequality (false) : 
console.log("numerical false test for equality: ", 5 == 4);
console.log("numerical false test for inequality: ", 5 !== 5);
//numerical test of greater than and less than (true):
console.log("Numerical true test of greater than :", 8 > 6);
console.log("numerical true test for less than :", 2 < 4);
//numerical test of greater than and less than (false):
console.log("Numerical false test of greater than :", 6 > 8);
console.log("numerical false test for less than :", 4 < 2);
//numerical test of greater than or equal to, and less than or equal to (true):
console.log("numerical true test for greater than or equals to :", 6 >= 6);
console.log("numerical true test for less than or equals to :", 6 <= 6);
//numerical test of greater than or equal to, and less than or equal to (false):
console.log("numerical false test for greater than or equals to :", 5 >= 6);
console.log("numerical false test for less than or equals to :", 6 <= 2);
//Tests using "and" and "or" operators
//test for 'and' operator:
//for True:
console.log("true test for and (&&):", (6 > 5 && 2 < 4));
//for false : 
console.log("false test for && : ", (6 > 5 && 4 < 1));
//test for 'or' operator :
//for True :
console.log("true test for || :", (7 > 4 || 1 > 4));
//for false :
console.log("False test for || :", (2 > 4 || 9 < 4));
//Test whether an item is in a array
//for true :
var array = ['books', 'pencils', 'pen'];
console.log("Is pen is in array above ?");
for (var i = 0; i < array.length; i = i + 1) {
    if ('pen' == array[i]) {
    }
}
console.log("The array is in the list", true);
//for false :
var array2 = ['pink', 'purple', 'blue', 'black'];
var $found = false;
console.log("Is eraser in the list ?");
for (var j = 0; j < array2.length; j = j + 1) {
    if ('eraser' === array2[j]) {
        $found = true;
        break;
    }
}
if ($found) {
    console.log("The item is in the list", true);
}
else {
    console.log("The item is not in the list", false);
}
