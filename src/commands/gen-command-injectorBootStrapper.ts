import { Command } from 'commander';

import { StringUtils } from '../utils/capitalizeFirstLetter';
import { genCommandInjectorBootStrapper } from '../services/genCommandInjectorBootStrapper';

export function setupInjectorBootStrapper(parentCommand: Command) {
    parentCommand.command('injector <nameController>')
        .alias('i')
        .description('Generate an Injector Boot Strapper')
        .action((nameRepository, options) => {
            genCommandInjectorBootStrapper({
                title: StringUtils.capitalizeFirstLetter(nameRepository),
                name: nameRepository
            });
        });
}
