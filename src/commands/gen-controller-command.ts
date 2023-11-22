import { Command } from 'commander';

import { genController } from '../services/genController';
import { StringUtils } from '../utils/capitalizeFirstLetter';

export function setupControllerCommand(parentCommand: Command) {
    parentCommand.command('controller <nameController> [fields...]')
        .alias('c')
        .description('Generate an controller')
        .action((nameRepository, fields, options) => {
            genController({
                title: StringUtils.capitalizeFirstLetter(nameRepository),
                name: nameRepository,
                content: fields
            });
        });
}
