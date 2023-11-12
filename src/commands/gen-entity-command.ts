import { Command } from 'commander';

export function setupEntityCommand(parentCommand: Command) {
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