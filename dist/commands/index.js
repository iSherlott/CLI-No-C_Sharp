"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInitCommand = exports.setupHelpCommand = exports.setupGenCommand = void 0;
var gen_command_1 = require("./gen-command");
Object.defineProperty(exports, "setupGenCommand", { enumerable: true, get: function () { return gen_command_1.setupGenCommand; } });
var help_command_1 = require("./help-command");
Object.defineProperty(exports, "setupHelpCommand", { enumerable: true, get: function () { return help_command_1.setupHelpCommand; } });
var init_command_1 = require("./init-command");
Object.defineProperty(exports, "setupInitCommand", { enumerable: true, get: function () { return init_command_1.setupInitCommand; } });
