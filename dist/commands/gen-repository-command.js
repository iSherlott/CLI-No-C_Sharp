"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRepositoryCommand = void 0;
const genRepository_1 = require("../services/genRepository");
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
function setupRepositoryCommand(parentCommand) {
    parentCommand.command('repository <nameRepository> [fields...]')
        .alias('r')
        .description('Generate an repository')
        .action((nameRepository, fields, options) => {
        (0, genRepository_1.genRepository)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameRepository),
            content: fields
        });
    });
}
exports.setupRepositoryCommand = setupRepositoryCommand;
