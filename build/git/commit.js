const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);
let msg = '';
export function getMessage(){
		return new Promise((resolve) => {
			rl.question('please enter your commit message: ', (message) => {
				msg = message || new Date().getTime();
	    		rl.close();
	    		resolve(msg)
			});
		});
}