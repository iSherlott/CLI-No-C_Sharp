"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScaffoldCommand = void 0;
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
const genEntity_1 = require("../services/genEntity");
const genCommand_1 = require("../services/genCommand");
const genHandler_1 = require("../services/genHandler");
const genRepository_1 = require("../services/genRepository");
const genController_1 = require("../services/genController");
const genCommandInjectorBootStrapper_1 = require("../services/genCommandInjectorBootStrapper");
function setupScaffoldCommand(program) {
    program
        .command('scaffold <nameScaffold> [fields...]')
        .alias('s')
        .description('Create Entity, Command, Handler, Repository in project')
        .option('--postgres <postgreSQLFields>', 'Specify PostgreSQL fields for the entity')
        .option('--baseSkip', 'This command ignore Base Entity')
        .option('--id', 'Generates the file with the type of management it will have')
        .action((nameScaffold, fields, options) => {
        let postgres;
        if (options.postgres) {
            const [table, schema] = options.postgres.split(":");
            postgres = { table, schema };
        }
        (0, genEntity_1.genEntity)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            postgres: postgres,
            baseSkip: options.baseSkip === undefined ? false : true,
            content: fields
        });
        (0, genCommand_1.genCommand)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            type: "Create",
            id: false,
            content: fields
        });
        (0, genCommand_1.genCommand)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            type: "Update",
            id: true,
            content: fields
        });
        (0, genHandler_1.genHandler)({
            title: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            name: nameScaffold,
            repository: true,
            content: fields
        });
        (0, genRepository_1.genRepository)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            content: fields
        });
        (0, genController_1.genController)({
            title: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            name: nameScaffold,
            content: fields
        });
        (0, genCommandInjectorBootStrapper_1.genCommandInjectorBootStrapper)({
            title: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameScaffold),
            name: nameScaffold
        });
    });
}
exports.setupScaffoldCommand = setupScaffoldCommand;
