import { Command } from 'commander';

export function setupControllerCommand(parentCommand: Command) {
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
