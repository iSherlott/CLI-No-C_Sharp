"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInjectorBootStrapper = void 0;
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
const genCommandInjectorBootStrapper_1 = require("../services/genCommandInjectorBootStrapper");
function setupInjectorBootStrapper(parentCommand) {
    parentCommand.command('injector <nameController>')
        .alias('i')
        .description('Generate an Injector Boot Strapper')
        .action((nameRepository, options) => {
        (0, genCommandInjectorBootStrapper_1.genCommandInjectorBootStrapper)({
            title: capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nameRepository),
            name: nameRepository
        });
    });
}
exports.setupInjectorBootStrapper = setupInjectorBootStrapper;
