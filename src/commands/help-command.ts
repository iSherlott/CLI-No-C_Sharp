import { Command } from 'commander';

export function setupHelpCommand(program: Command) {
    program
        .command('help')
        .description('Display the help information')
        .action(() => {
            program.help();
        });
}
