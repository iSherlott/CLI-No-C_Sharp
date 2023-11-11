"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGenCommand = void 0;
const commander_1 = require("commander");
function setupGenCommand(program) {
    const genCommand = new commander_1.Command('g');
    program.addCommand(genCommand);
    const entityCommand = new commander_1.Command('e <nameEntity> [options...]')
        .alias('e')
        .alias('entity')
        .description('Generate an entity')
        .action((nameEntity, options, command) => {
        console.log(`Generate entity ${nameEntity}`);
        console.log("Entity");
        // Adicione aqui a lógica para gerar a entidade
    });
    const commandCommand = new commander_1.Command('command <nameCommand> [options...]')
        .alias('command')
        .alias('f')
        .description('Generate a command')
        .action((nameCommand, options, command) => {
        console.log(`Generate command ${nameCommand}`);
        console.log("Command");
        // Adicione aqui a lógica para gerar o comando
    });
    const handlerCommand = new commander_1.Command('handler <nameHandler> [options...]')
        .alias('handler')
        .alias('h')
        .description('Generate a handler')
        .action((nameHandler, options, command) => {
        console.log(`Generate handler ${nameHandler}`);
        console.log("Handler");
        // Adicione aqui a lógica para gerar o handler
    });
    const repositoryCommand = new commander_1.Command('repository <nameRepository> [options...]')
        .alias('repository')
        .alias('r')
        .description('Generate a repository')
        .action((nameRepository, options, command) => {
        console.log(`Generate repository ${nameRepository}`);
        console.log("Repository");
        // Adicione aqui a lógica para gerar o repositório
    });
    const controllerCommand = new commander_1.Command('controller <nameController> [options...]')
        .alias('controller')
        .alias('c')
        .description('Generate a controller')
        .action((nameController, options, command) => {
        console.log(`Generate controller ${nameController}`);
        console.log("Controller");
        // Adicione aqui a lógica para gerar o controlador
    });
    genCommand
        .addCommand(entityCommand)
        .addCommand(commandCommand)
        .addCommand(handlerCommand)
        .addCommand(repositoryCommand)
        .addCommand(controllerCommand);
}
exports.setupGenCommand = setupGenCommand;
