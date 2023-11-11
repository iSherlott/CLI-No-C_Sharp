"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHandlerCommand = void 0;
const commander_1 = require("commander");
function setupHandlerCommand(parentCommand) {
    const commandCommand = new commander_1.Command('handler <nameCommand> [options...]')
        .alias('h')
        .alias('handler')
        .description('Generate a handler')
        .action((nameCommand, options, command) => {
        console.log(`Generate handler ${nameCommand}`);
        console.log("Handler");
        // Adicione aqui a lógica para gerar o comando
    });
    parentCommand.addCommand(commandCommand);
}
exports.setupHandlerCommand = setupHandlerCommand;
