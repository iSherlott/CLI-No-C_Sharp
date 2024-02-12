"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupScheuleAdd = void 0;
const fs_1 = require("fs");
const genCommandSolution_1 = require("../services/genCommandSolution");
const addSchedule_1 = require("../services/addSchedule");
function setupScheuleAdd(parentCommand) {
    parentCommand.command('schedule')
        .description('Add scheudle in project')
        .action(async () => {
        const currentDirectory = process.cwd();
        const files = await fs_1.promises.readdir(currentDirectory);
        if (files.includes("Schedule"))
            return console.log("Schedule already exist");
        await (0, addSchedule_1.addSchedule)();
        (0, genCommandSolution_1.genCommandSolution)();
    });
}
exports.setupScheuleAdd = setupScheuleAdd;
