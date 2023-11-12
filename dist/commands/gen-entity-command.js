"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupEntityCommand = void 0;
function setupEntityCommand(parentCommand) {
    parentCommand.command('entity <nameEntity>')
        .alias('e')
        .description('Generate an entity')
        .action((nameEntity) => {
        console.log(`Generate entity ${nameEntity}`);
        console.log('nameEntity:', nameEntity);
        console.log("Entity");
        // Adicione aqui a lógica para gerar a entidade
    });
}
exports.setupEntityCommand = setupEntityCommand;
