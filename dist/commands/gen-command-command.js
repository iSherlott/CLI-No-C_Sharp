"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCommandCommand = void 0;
function setupCommandCommand(parentCommand) {
    parentCommand.command('command <nameCommand>')
        .alias('f')
        .description('Generate an Command')
        .action((nameCommand) => {
        console.log(`Generate command ${nameCommand}`);
        console.log('Command:', nameCommand);
        console.log("Command");
        // Adicione aqui a lógica para gerar a entidade
    });
}
exports.setupCommandCommand = setupCommandCommand;
