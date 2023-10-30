import { Command } from 'commander';
import { setupGenCommand, setupHelpCommand } from '../commands';

export function setupCommands(program: Command) {
    program.name('ficli');

    setupGenCommand(program);
    setupHelpCommand(program);
}
