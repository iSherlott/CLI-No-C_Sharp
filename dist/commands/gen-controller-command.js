"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupControllerCommand = void 0;
const genController_1 = require("../services/genController");
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
function setupControllerCommand(parentCommand) {
    parentCommand.command('controller <nameController> [fields...]')
        .alias('c')
        .description('Generate an controller')
        .action((nameRepository, fields, options) => {
        (0, genController_1.genController)({
            title: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameRepository),
            name: nameRepository,
            content: fields
        });
    });
}
exports.setupControllerCommand = setupControllerCommand;
