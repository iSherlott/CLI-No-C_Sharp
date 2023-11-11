import { Command } from 'commander';

export function setupCommandCommand(parentCommand: Command) {
    const commandCommand = new Command('command <nameCommand> [options...]')
        .alias('f')
        .alias('command')
        .description('Generate a command')
        .action((nameCommand, options, command) => {
            console.log(`Generate command ${nameCommand}`);
            console.log("Command");
            // Adicione aqui a lógica para gerar o comando
        });

    parentCommand.addCommand(commandCommand);
}
