import { Command } from 'commander';
import { genEntity } from '../services/genEntity';
import { StringUtils } from '../utils/capitalizeFirstLetter';

import { Database } from '../interfaces/entity.interface';

export function setupEntityCommand(parentCommand: Command) {
    parentCommand.command('entity <nameEntity> [fields...]')
        .alias('e')
        .description('Generate an entity')
        .option('--postgres <postgreSQLFields>', 'Specify PostgreSQL fields for the entity')
        .action((nameEntity, fields, options) => {
            let postgres: Database | undefined;

            if (options.postgres) {
                const [table, schema] = options.postgres.split(":")
                postgres = { table, schema };
            }

            genEntity({
                name: StringUtils.capitalizeFirstLetter(nameEntity),
                postgres: postgres,
                content: fields
            })
        });
}