"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCommands = void 0;
const commander_1 = require("commander");
const commands_1 = require("../commands");
function setupCommands(program) {
    program.name('nc');
    const genCommand = new commander_1.Command('g');
    program.addCommand(genCommand);
    (0, commands_1.setupEntityCommand)(genCommand);
    (0, commands_1.setupCommandCommand)(genCommand);
    (0, commands_1.setupRepositoryCommand)(genCommand);
    (0, commands_1.setupControllerCommand)(genCommand);
    (0, commands_1.setupHelpCommand)(program);
    (0, commands_1.setupInitCommand)(program);
}
exports.setupCommands = setupCommands;
