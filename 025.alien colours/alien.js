var alien_colour = ['green', 'yellow', 'red'];
var found = false;
for (var i = 0; i < alien_colour.length; i = i + 1) {
    if ('green' == alien_colour[i]) {
        found = true;
        break;
    }
}
if (found) {
    console.log("Congrats,you just earned 5 points");
}
//2nd version
var $alien_colour = ['green', 'yellow', 'red'];
var $found = false;
for (var j = 0; j < $alien_colour.length; j = j + 1) {
    if ('pink' == $alien_colour[j]) {
        $found = true;
        break;
    }
}
if ($found) {
    console.log("Congrats,you just earned 5 points");
}
