var guest = ['Imran khan', 'babar Azam', 'naseem shah'];
for (var i = 0; i < guest.length; i = i + 1) {
    console.log('Dear Mr.' + guest[i] + ',\n\nIts a pleasure to invite you today thanks for joining us!\n\n');
}
console.log("we have a bigger table to adjust more 3 people");
guest.unshift('Hamza');
guest.push('Ahmed');
guest.splice(2, 0, 'Bilal');
for (var i = 0; i < guest.length; i = i + 1) {
    console.log('Dear Mr.' + guest[i] + ',\n\nIts a pleasure to invite you today thanks for joining us!\n\n');
}
