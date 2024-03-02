let Name : string='';
Name=prompt("Enter your name:")||'';
let lowername :string=Name.toLowerCase();
let uppername:string=Name.toUpperCase();
let titlename:string=Name.charAt(0).toUpperCase() + Name.slice(1);

if (Name!== null && Name!=='')
{
    alert(`your name in :
    lowercase:${lowername}
    uppercase:${uppername}
    titlecase:${titlename}`);
}
else{
    alert(`you need to fill out smth`);
}
