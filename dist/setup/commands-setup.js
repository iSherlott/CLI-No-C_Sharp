"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCommands = void 0;
const commands_1 = require("../commands");
function setupCommands(program) {
    program.name('ficli');
    (0, commands_1.setupGenCommand)(program);
    (0, commands_1.setupHelpCommand)(program);
    (0, commands_1.setupInitCommand)(program);
}
exports.setupCommands = setupCommands;
