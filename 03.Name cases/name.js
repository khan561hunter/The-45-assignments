var Name = '';
Name = prompt("Enter your name:") || '';
var lowername = Name.toLowerCase();
var uppername = Name.toUpperCase();
var titlename = Name.charAt(0).toUpperCase() + Name.slice(1);
if (Name !== null && Name !== '') {
    alert("your name in :\n    lowercase:".concat(lowername, "\n    uppercase:").concat(uppername, "\n    titlecase:").concat(titlename));
}
else {
    alert("you need to fill out smth");
}
