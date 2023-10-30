"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHelpCommand = void 0;
function setupHelpCommand(program) {
    program
        .command('help')
        .description('Display the help information')
        .action(() => {
        program.help();
    });
}
exports.setupHelpCommand = setupHelpCommand;
