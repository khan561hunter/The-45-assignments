// Store the locations in a array. Make sure the array is not in alphabetical order.
let places : string [] = ['Canada','Germany','Thailand','Switzerland','America'];

//print your array in its original form
console.log(places);

//print your array in alphabetical order without modifying the list
console.log('\nalphabetical form without modifying the list :' + [...places].sort());

//show that your array is still in its orginal order by printing it
console.log('\nit is in its original form :' + places);

//Reverse the order of your list again.
console.log('\nreverses the order of string without modifying the list:' +[...places].sort().reverse());

//Print the list to show it’s back to its original order
console.log('\nArray is in its original form :'+ places);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('\nsorted in alphabetical order:' + places.sort());
console.log('\norder of array is changed:' + places);

//Sort to change your array so it’s stored in reverse alphabetical order.
console.log('\nReversed the array :' + places.sort());

// Print the list to show that its order has changed.
console.log('\nThe order of array is changed :' + places);

