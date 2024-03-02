let person_name:string='';
person_name=prompt("What is your name?") || '';
if (person_name!== null && person_name!=='')
{
    alert(`Hello ${person_name},would you like to learn some Python today?`);
}
else{
    alert(`you need to fill out smth `);
}