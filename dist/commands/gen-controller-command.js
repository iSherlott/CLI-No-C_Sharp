"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupControllerCommand = void 0;
const commander_1 = require("commander");
function setupControllerCommand(parentCommand) {
    const commandCommand = new commander_1.Command('controller <nameCommand> [options...]')
        .alias('c')
        .alias('controller')
        .description('Generate a controller')
        .action((nameCommand, options, command) => {
        console.log(`Generate controller ${nameCommand}`);
        console.log("Controller");
        // Adicione aqui a lógica para gerar o comando
    });
    parentCommand.addCommand(commandCommand);
}
exports.setupControllerCommand = setupControllerCommand;
