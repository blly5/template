const execa = require("execa");
const Colors = require('colors');


let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    await execa(`git`, [`add`, `.`]);
    await execa(`git`, [`commit`, `-m`, `🐘`]);
    await execa(`git`, [`push`]);
}
main().then(a=>{
    console.clear();
    console.log(`Done`.bgBlue);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});