"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupEntityCommand = void 0;
const commander_1 = require("commander");
function setupEntityCommand(parentCommand) {
    const entityCommand = new commander_1.Command('entity <nameEntity> [options...]')
        .alias('e')
        .alias('entity')
        .description('Generate an entity')
        .action((nameEntity, options, command) => {
        console.log(`Generate entity ${nameEntity}`);
        console.log("Entity");
        // Adicione aqui a lógica para gerar a entidade
    });
    parentCommand.addCommand(entityCommand);
}
exports.setupEntityCommand = setupEntityCommand;
