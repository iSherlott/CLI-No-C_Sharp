import { Command } from 'commander';

import { Database } from '../interfaces/entity.interface';
import { StringUtils } from '../utils/capitalizeFirstLetter';

import { genEntity } from '../services/genEntity';
import { genCommand } from '../services/genCommand';
import { genHandler } from '../services/genHandler';
import { genRepository } from '../services/genRepository';
import { genController } from '../services/genController';


export function setupScaffoldCommand(program: Command) {
    program
        .command('scaffold <nameScaffold> [fields...]')
        .alias('s')
        .description('Create Entity, Command, Handler, Repository in project')
        .option('--postgres <postgreSQLFields>', 'Specify PostgreSQL fields for the entity')
        .option('--baseSkip', 'This command ignore Base Entity')
        .option('--id', 'Generates the file with the type of management it will have')
        .action((nameScaffold, fields, options) => {
            let postgres: Database | undefined;

            if (options.postgres) {
                const [table, schema] = options.postgres.split(":")
                postgres = { table, schema };
            }

            genEntity({
                name: StringUtils.capitalizeFirstLetter(nameScaffold),
                postgres: postgres,
                baseSkip: options.baseSkip === undefined ? false : true,
                content: fields
            })

            genCommand({
                name: StringUtils.capitalizeFirstLetter(nameScaffold),
                type: "Create",
                id: options.id,
                content: fields
            });

            genCommand({
                name: StringUtils.capitalizeFirstLetter(nameScaffold),
                type: "Update",
                id: options.id,
                content: fields
            });

            genHandler({
                title: StringUtils.capitalizeFirstLetter(nameScaffold),
                name: nameScaffold,
                repository: true,
                content: fields
            })

            genRepository({
                name: StringUtils.capitalizeFirstLetter(nameScaffold),
                content: fields
            });

            genController({
                title: StringUtils.capitalizeFirstLetter(nameScaffold),
                name: nameScaffold,
                content: fields
            });
        });
}