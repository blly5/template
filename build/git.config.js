const execa = require("execa");
const Colors = require('colors');
const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

    let msg = '';

    function getMessage(){
        return  new Promise((resolve) => {
            rl.question('commit message: ', (message) => {
                msg = message || new Date().getTime();
                rl.close();
                resolve(msg)
            });
        });
    };

    let main = async ()=>{
        console.log(`Soon...`.bgBlue);
        await execa(`git`, [`add`, `.`]);
        await getMessage().then(a=>{
            execa(`git`, [`commit`, `-m`, `${a}`]); 
        });
        await execa(`git`, [`push`]);
    }
    main().then(a=>{
        console.clear();
        console.log(`Done`.bgGreen);
    })
    .catch(a=>{
        console.log(`${a}`.bgMagenta);
    });




