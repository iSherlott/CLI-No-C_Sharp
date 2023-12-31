import { Command } from 'commander';
import { genHandler } from '../services/genHandler';
import { StringUtils } from '../utils/capitalizeFirstLetter';

export function setupHandlerCommand(parentCommand: Command) {
    parentCommand.command('handler <nameHandler> [fields...]')
        .alias('h')
        .description('Generate an handler')
        .option('--repository', 'This command create handler in repository target')
        .action((nameHandler, fields, options) => {
            genHandler({
                title: StringUtils.capitalizeFirstLetter(nameHandler),
                name: nameHandler,
                repository: options.repository === undefined ? false : true,
                content: fields
            })
        });
}
