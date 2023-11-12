"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHandlerCommand = void 0;
function setupHandlerCommand(parentCommand) {
    parentCommand.command('handler <nameHandler>')
        .alias('h')
        .description('Generate an handler')
        .action((nameRepository) => {
        console.log(`Generate handler ${nameRepository}`);
        console.log('Handler:', nameRepository);
        console.log("Handler");
        // Adicione aqui a lógica para gerar a entidade
    });
}
exports.setupHandlerCommand = setupHandlerCommand;
