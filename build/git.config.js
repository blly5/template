const execa = require("execa");
const Colors = require('colors');


let main = async ()=>{
    await execa(`git`, [`add`, `.`]);
    await execa(`git`, [`commit`, `-m`, `🐘`]);
    await execa(`git`, [`push`]);
}
main().catch(a=>{
    console.log(`${a}`.bgMagenta);
});