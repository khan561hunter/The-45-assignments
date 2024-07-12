let guest :string[]=['Imran khan','babar Azam','naseem shah']; 

for (let i=0;i<guest.length;i=i+1)
{
    console.log('Dear Mr.'+ guest[i] + ',\n\nIts a pleasure to invite you today thanks for joining us!\n\n');
}
let absent :string='naseem shah';

let new_guest:string='Muhammad rizwan';

guest[2] = new_guest;

for (let i=0 ; i<guest.length ;i=i+1)
{
    console.log('Dear Mr.'+ guest[i] + ',\n\nIts a pleasure to invite you today thanks for joining us!\n\n');
}
console.log(`the person who couldn't come to party was ${absent}`);