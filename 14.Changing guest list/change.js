var guest = ['Imran khan', 'babar Azam', 'naseem shah'];
for (var i = 0; i < guest.length; i = i + 1) {
    console.log('Dear Mr.' + guest[i] + ',\n\nIts a pleasure to invite you today thanks for joining us!\n\n');
}
var absent = 'naseem shah';
var new_guest = 'Muhammad rizwan';
guest[2] = new_guest;
for (var i = 0; i < guest.length; i = i + 1) {
    console.log('Dear Mr.' + guest[i] + ',\n\nIts a pleasure to invite you today thanks for joining us!\n\n');
}
console.log("the person who couldn't come to party was ".concat(absent));
