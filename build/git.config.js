const execa = require("execa");
const Colors = require('colors');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);
let msg = '';

function getMessage(){
    new Promise((resolve) => {
        rl.question('please enter your commit message: ', (message) => {
            msg = message || new Date().getTime();
            rl.close();
            resolve(msg)
        });
    });
}



let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    let m = await getMessage();

    await execa(`git`, [`add`, `.`]);

    await execa(`git`, [`commit`, `-m`, `${m}`]); 

    await execa(`git`, [`push`]);
}
main().then(a=>{
    console.clear();
    console.log(`Done`.bgGreen);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});