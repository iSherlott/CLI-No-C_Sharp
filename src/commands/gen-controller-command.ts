import { Command } from 'commander';

export function setupControllerCommand(parentCommand: Command) {
    const commandCommand = new Command('controller <nameCommand> [options...]')
        .alias('c')
        .alias('controller')
        .description('Generate a controller')
        .action((nameCommand, options, command) => {
            console.log(`Generate controller ${nameCommand}`);
            console.log("Controller");
            // Adicione aqui a lógica para gerar o comando
        });

    parentCommand.addCommand(commandCommand);
}
