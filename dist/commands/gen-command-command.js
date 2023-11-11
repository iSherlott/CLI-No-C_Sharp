"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCommandCommand = void 0;
const commander_1 = require("commander");
function setupCommandCommand(parentCommand) {
    const commandCommand = new commander_1.Command('command <nameCommand> [options...]')
        .alias('f')
        .alias('command')
        .description('Generate a command')
        .action((nameCommand, options, command) => {
        console.log(`Generate command ${nameCommand}`);
        console.log("Command");
        // Adicione aqui a lógica para gerar o comando
    });
    parentCommand.addCommand(commandCommand);
}
exports.setupCommandCommand = setupCommandCommand;
