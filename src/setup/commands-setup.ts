import { Command } from 'commander';
import { setupGenCommand, setupHelpCommand, setupInitCommand } from '../commands';

export function setupCommands(program: Command) {
    program.name('nc');

    setupGenCommand(program);
    setupHelpCommand(program);
    setupInitCommand(program);
}
