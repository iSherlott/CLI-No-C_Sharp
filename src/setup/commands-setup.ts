import { Command } from 'commander';
import {
    setupHelpCommand,
    setupInitCommand,
    setupEntityCommand,
    setupCommandCommand,
    setupRepositoryCommand,
    setupControllerCommand
} from '../commands';

export function setupCommands(program: Command) {
    program.name('nc');

    const genCommand = new Command('g');
    program.addCommand(genCommand);

    setupEntityCommand(genCommand);
    setupCommandCommand(genCommand);
    setupRepositoryCommand(genCommand);
    setupControllerCommand(genCommand);

    setupHelpCommand(program);
    setupInitCommand(program);
}
