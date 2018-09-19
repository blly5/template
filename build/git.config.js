const execa = require("execa");
const Colors = require('colors');


let main = async ()=>{
    console.log(`Soon`.bgCyan);
    await execa(`git`, [`add`, `.`]);
    await execa(`git`, [`commit`, `-m`, `🐘`]);
    await execa(`git`, [`push`]);
}
main().then(a=>{
    console.log(`Done`.bgCyan);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});