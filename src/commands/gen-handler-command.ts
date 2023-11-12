import { Command } from 'commander';

export function setupHandlerCommand(parentCommand: Command) {
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
