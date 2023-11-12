import { Command } from 'commander';

export function setupCommandCommand(parentCommand: Command) {
    parentCommand.command('command <nameCommand>')
        .alias('f')
        .description('Generate an Command')
        .action((nameCommand) => {
            console.log(`Generate command ${nameCommand}`);
            console.log('Command:', nameCommand);
            console.log("Command");
            // Adicione aqui a lógica para gerar a entidade
        });
}