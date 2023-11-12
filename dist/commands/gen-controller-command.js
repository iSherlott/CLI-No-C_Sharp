"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupControllerCommand = void 0;
function setupControllerCommand(parentCommand) {
    parentCommand.command('controller <nameController>')
        .alias('c')
        .description('Generate an controller')
        .action((nameRepository) => {
        console.log(`Generate controller ${nameRepository}`);
        console.log('Controller:', nameRepository);
        console.log("Controller");
        // Adicione aqui a lógica para gerar a entidade
    });
}
exports.setupControllerCommand = setupControllerCommand;
