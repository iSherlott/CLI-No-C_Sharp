"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRepositoryCommand = void 0;
const commander_1 = require("commander");
function setupRepositoryCommand(parentCommand) {
    const commandCommand = new commander_1.Command('repository <nameCommand> [options...]')
        .alias('r')
        .alias('repository')
        .description('Generate a repository')
        .action((nameCommand, options, command) => {
        console.log(`Generate repository ${nameCommand}`);
        console.log("Repository");
        // Adicione aqui a lógica para gerar o comando
    });
    parentCommand.addCommand(commandCommand);
}
exports.setupRepositoryCommand = setupRepositoryCommand;
