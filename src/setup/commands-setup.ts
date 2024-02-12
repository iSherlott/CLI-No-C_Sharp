import { Command } from 'commander';
import {
    setupHelpCommand,
    setupInitCommand,
    setupEntityCommand,
    setupCommandCommand,
    setupRepositoryCommand,
    setupControllerCommand,
    setupHandlerCommand,
    setupScaffoldCommand,
    setupInjectorBootStrapper,
    setupScheuleAdd
} from '../commands';

export function setupCommands(program: Command) {
    program.name('nc');
    setupHelpCommand(program);
    setupInitCommand(program);
    setupScaffoldCommand(program);

    const genCommand = new Command('g');
    program.addCommand(genCommand);

    setupEntityCommand(genCommand);
    setupCommandCommand(genCommand);
    setupRepositoryCommand(genCommand);
    setupControllerCommand(genCommand);
    setupHandlerCommand(genCommand);
    setupInjectorBootStrapper(genCommand);

    const addCommand = new Command('add');
    program.addCommand(addCommand);
    setupScheuleAdd(addCommand);
}
