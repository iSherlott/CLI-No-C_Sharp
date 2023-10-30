"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const commands_1 = require("../commands");
const program = new commander_1.Command();
program.name('ficli');
(0, commands_1.setupGenCommand)(program);
(0, commands_1.setupHelpCommand)(program);
program.parse(process.argv);
