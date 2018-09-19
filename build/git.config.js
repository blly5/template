const execa = require("execa");


let main = async ()=>{
    await execa(`git`, [`add`, `.`]);
    await execa(`git`, [`commit`, `-m`, `123`]);
    await execa(`git`, [`push`]);
}
main();