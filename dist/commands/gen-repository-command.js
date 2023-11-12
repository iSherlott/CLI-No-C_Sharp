"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRepositoryCommand = void 0;
function setupRepositoryCommand(parentCommand) {
    parentCommand.command('repository <nameRepository>')
        .alias('r')
        .description('Generate an repository')
        .action((nameRepository) => {
        console.log(`Generate repository ${nameRepository}`);
        console.log('Repository:', nameRepository);
        console.log("Repository");
        // Adicione aqui a lógica para gerar a entidade
    });
}
exports.setupRepositoryCommand = setupRepositoryCommand;
