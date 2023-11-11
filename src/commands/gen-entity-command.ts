import { Command } from 'commander';

export function setupEntityCommand(parentCommand: Command) {
    const entityCommand = new Command('entity <nameEntity> [options...]')
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
