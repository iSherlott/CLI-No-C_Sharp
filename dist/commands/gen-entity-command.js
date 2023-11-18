"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupEntityCommand = void 0;
const genEntity_1 = require("../services/genEntity");
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
function setupEntityCommand(parentCommand) {
    parentCommand.command('entity <nameEntity> [fields...]')
        .alias('e')
        .description('Generate an entity')
        .option('--postgres <postgreSQLFields>', 'Specify PostgreSQL fields for the entity')
        .option('--baseSkip', 'This command ignore Base Entity')
        .action((nameEntity, fields, options) => {
        let postgres;
        if (options.postgres) {
            const [table, schema] = options.postgres.split(":");
            postgres = { table, schema };
        }
        (0, genEntity_1.genEntity)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameEntity),
            postgres: postgres,
            baseSkip: options.baseSkip === undefined ? false : true,
            content: fields
        });
    });
}
exports.setupEntityCommand = setupEntityCommand;
