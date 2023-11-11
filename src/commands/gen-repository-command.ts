import { Command } from 'commander';

export function setupRepositoryCommand(parentCommand: Command) {
    const commandCommand = new Command('repository <nameCommand> [options...]')
        .alias('r')
        .alias('repository')
        .description('Generate a repository')
        .action((nameCommand, options, command) => {
            console.log(`Generate repository ${nameCommand}`);
            console.log("Repository");
            // Adicione aqui a lógica para gerar o comando
        });

    parentCommand.addCommand(commandCommand);
}
