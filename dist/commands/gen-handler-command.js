"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHandlerCommand = void 0;
const genHandler_1 = require("../services/genHandler");
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
function setupHandlerCommand(parentCommand) {
    parentCommand.command('handler <nameHandler> [fields...]')
        .alias('h')
        .description('Generate an handler')
        .option('--repository', 'This command create handler in repository target')
        .action((nameHandler, fields, options) => {
        (0, genHandler_1.genHandler)({
            name: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameHandler),
            content: fields
        });
    });
}
exports.setupHandlerCommand = setupHandlerCommand;
