const execa = require("execa");
const Colors = require('colors');


let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    await execa(`git`, [`add`, `.`]);
    console.clear(`请输入Commit ⤵️`);
    const msg = await execa(`echo`,['input']);
    await execa(`git`, [`commit`, `-m`, `🐘`]); 
    await execa(`git`, [`push`]);
}
main().then(a=>{
    
    console.log(`Done`.bgGreen);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});