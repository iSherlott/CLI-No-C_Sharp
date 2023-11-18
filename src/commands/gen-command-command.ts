import { Command } from 'commander';
import { genCommand } from '../services/genCommand';
import { StringUtils } from '../utils/capitalizeFirstLetter';

export function setupCommandCommand(parentCommand: Command) {
    parentCommand.command('command <nameCommand> [fields...]')
        .alias('f')
        .description('Generate an Command')
        .option('--type <typeFields>', 'Generates the file with the type of management it will have')
        .option('--id', 'Generates the file with the type of management it will have')
        .action((nameCommand, fields, options) => {

            genCommand({
                name: StringUtils.capitalizeFirstLetter(nameCommand),
                type: options.type ? StringUtils.capitalizeFirstLetter(options.type) : "",
                id: options.id,
                content: fields
            });
        });
}