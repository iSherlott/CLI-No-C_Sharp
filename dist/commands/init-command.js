"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInitCommand = void 0;
const initializeProjectStructure_1 = require("../services/initializeProjectStructure");
function setupInitCommand(program) {
    program
        .command('new <nomeProject>')
        .description('Initialize a new project')
        .action((nomeProject) => {
        (0, initializeProjectStructure_1.initializeProjectStructure)(nomeProject);
    });
}
exports.setupInitCommand = setupInitCommand;
