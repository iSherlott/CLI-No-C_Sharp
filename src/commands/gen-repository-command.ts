import { Command } from 'commander';

export function setupRepositoryCommand(parentCommand: Command) {
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
