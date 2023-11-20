import { Command } from 'commander';
import { genRepository } from '../services/genRepository';
import { StringUtils } from '../utils/capitalizeFirstLetter';

export function setupRepositoryCommand(parentCommand: Command) {
    parentCommand.command('repository <nameRepository> [fields...]')
        .alias('r')
        .description('Generate an repository')
        .action((nameRepository, fields, options) => {
            genRepository({
                name: StringUtils.capitalizeFirstLetter(nameRepository),
                content: fields
            });
        });
}
