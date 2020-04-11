/*
 * @Author: Blue
 * @Date: 2019-07-17 11:54:15
 * @Last Modified by: Blue
 * @Last Modified time: 2020-04-11 16:10:19
 */

const execa = require("execa");
const Colors = require("colors");
const readline = require("readline");
const ora = require("ora");

const loading = ora({
    color: "blue",
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getMessage() {
    return new Promise((resolve) => {
        rl.question("commit message:".bgGreen, (message) => {
            message = message || "";
            rl.close();
            resolve(message);
        });
    });
};

async function main() {
    try {
        await execa('git', ['add', '.']);
        let message = await getMessage();
        await execa('git', ['commit', '-m', message]);
        loading.start();
        await execa('git', ['push']);
        loading.succeed();
    } catch (e) {
        loading.warn(e);
    }
};

main();