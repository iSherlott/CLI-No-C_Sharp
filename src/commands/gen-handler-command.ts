import { Command } from 'commander';

export function setupHandlerCommand(parentCommand: Command) {
    const commandCommand = new Command('handler <nameCommand> [options...]')
        .alias('h')
        .alias('handler')
        .description('Generate a handler')
        .action((nameCommand, options, command) => {
            console.log(`Generate handler ${nameCommand}`);
            console.log("Handler");
            // Adicione aqui a lógica para gerar o comando
        });

    parentCommand.addCommand(commandCommand);
}
