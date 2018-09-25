const execa = require("execa");
const Colors = require('colors');


let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    await execa(`git`, [`add`, `.`]);
    let a = new Date();

    await execa(`git`, [`commit`, `-m`, `${a}`]); 
    await execa(`git`, [`push`]);
}
main().then(a=>{
    console.clear();
    console.log(`Done`.bgGreen);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});