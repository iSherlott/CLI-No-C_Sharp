import path from "path";

import { mkdirSync, writeFileSync, copyFileSync, unlinkSync } from 'fs';
import { processDirectory } from '../utils/readFile';
import { updateProgram } from "./updateProgram";

import Program from "../interfaces/program.interface";

const Mustache = require('mustache');

export async function addSchedule() {
    const currentDirectory = process.cwd();

    const projectPath = path.join(currentDirectory, "Schedule");

    const foldersToCreate = [
        "Configuration",
        "Work",
    ]

    const rootFolderPath: string = path.join(__dirname, '../../template/add/schedule');
    const template = processDirectory(rootFolderPath);

    mkdirSync(projectPath);

    for (const folder of foldersToCreate) {
        mkdirSync(`${projectPath}/${folder}`, { recursive: true });
    }

    template.forEach((elem: any) => {
        const data = {}

        const file = Mustache.render(elem.content, data);

        const fileName = elem.target.split("/schedule/")[1];
        const filePath = `${projectPath}/${fileName}`;

        writeFileSync(filePath, file);

        if (fileName === 'StartQuartzScheduler.cs') {
            const targetPath = `${currentDirectory}/API/Configurations/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        const program: Program = { builder: ["builder.Services.AddSchedule();"], apps: [] }

        updateProgram(program)
    })
}