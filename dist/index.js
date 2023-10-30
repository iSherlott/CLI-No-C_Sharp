"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const commands_setup_1 = require("./setup/commands-setup");
const program = new commander_1.Command();
(0, commands_setup_1.setupCommands)(program);
program.parse(process.argv);
