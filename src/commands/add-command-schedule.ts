import { Command } from 'commander';

import { promises as fsPromises, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { genCommandSolution } from '../services/genCommandSolution';


import path from 'path';
import { addSchedule } from '../services/addSchedule';

export function setupScheuleAdd(parentCommand: Command) {
    parentCommand.command('schedule')
        .description('Add scheudle in project')
        .action(async () => {
            const currentDirectory = process.cwd();
            const files = await fsPromises.readdir(currentDirectory);

            if (files.includes("Schedule")) return console.log("Schedule already exist")

            await addSchedule();

            genCommandSolution();
        });
}