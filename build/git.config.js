const execa = require("execa");
const Colors = require('colors');

let a = new Date();
let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    await execa(`git`, [`add`, `.`]);

    // console.log(`请输入Commit ⤵️`);
    // let msg = await execa(`echo`,['input']);

    await execa(`git`, [`commit`, `-m`, `${a}`]); 
    await execa(`git`, [`push`]);
}
main().then(a=>{
    console.clear();
    console.log(`Done`.bgGreen);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});