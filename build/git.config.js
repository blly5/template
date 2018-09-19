const execa = require("execa");
const Colors = require('colors');


let main = async ()=>{
    console.log(`Soon...`.bgBlue);
    await execa(`git`, [`add`, `.`]);
    console.log(`请输入Commit ⤵️`);
    
    
    let msg = await execa(`echo`,['input']);
    await console.log('msg');
    await execa(`git`, [`commit`, `-m`, `${msg}`]); 
    await execa(`git`, [`push`]);
}
main().then(a=>{
    
    console.log(`Done`.bgGreen);
}).catch(a=>{
    console.log(`${a}`.bgMagenta);
});