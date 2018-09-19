const execa = require("execa");
const Colors = require('colors');
let msg;

let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    await execa(`git`, [`add`, `.`]);
    console.log(`请输入Commit ⤵️`);
    
    
    await execa(`echo`,['input']).then(a=>{
        msg = a;
        console.log(a);
    })
    .catch(a=>{
        msg = 'Done';
    });
    await execa(`git`, [`commit`, `-m`, `${msg}`]); 
    await execa(`git`, [`push`]);
}
main().then(a=>{
    
    console.log(`Done`.bgGreen);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});