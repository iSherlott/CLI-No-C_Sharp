"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCommandCommand = void 0;
const genCommand_1 = require("../services/genCommand");
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
function setupCommandCommand(parentCommand) {
    parentCommand.command('command <nameCommand> [fields...]')
        .alias('f')
        .description('Generate an Command')
        .option('--type <typeFields>', 'Generates the file with the type of management it will have')
        .option('--id', 'Generates the file with the type of management it will have')
        .action((nameCommand, fields, options) => {
        (0, genCommand_1.genCommand)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameCommand),
            type: options.type ? capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(options.type) : "",
            id: options.id,
            content: fields
        });
    });
}
exports.setupCommandCommand = setupCommandCommand;
