"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInitCommand = void 0;
const initializeProjectStructure_1 = require("../services/initializeProjectStructure");
function setupInitCommand(program) {
    program
        .command('new <nameProject>')
        .description('Initialize a new project')
        .action((nameProject) => {
        (0, initializeProjectStructure_1.initializeProjectStructure)(nameProject);
    });
}
exports.setupInitCommand = setupInitCommand;
