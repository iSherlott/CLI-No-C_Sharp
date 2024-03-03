import path from "path";

import { mkdirSync, writeFileSync, copyFileSync, unlinkSync } from 'fs';
import { processDirectory } from '../utils/readFile';
import { updateProgram } from "./updateProgram";

import Program from "../interfaces/program.interface";

const Mustache = require('mustache');

export async function addAzure() {
    const currentDirectory = process.cwd();

    const projectPath = path.join(currentDirectory, "Azure");

    const foldersToCreate = [
        "Configuration",
        "Services",
    ]

    const rootFolderPath: string = path.join(__dirname, '../../template/add/azure');
    const template = processDirectory(rootFolderPath);

    mkdirSync(projectPath);

    for (const folder of foldersToCreate) {
        mkdirSync(`${projectPath}/${folder}`, { recursive: true });
    }

    template.forEach((elem: any) => {
        const data = {}

        const file = Mustache.render(elem.content, data);

        const fileName = elem.target.split("/azure/")[1];
        const filePath = `${projectPath}/${fileName}`;

        writeFileSync(filePath, file);

        if (fileName === 'AzureSettings.cs') {
            const targetPath = `${currentDirectory}/API/Configurations/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        if (fileName === 'IAzureBlobService.cs') {
            const targetPath = `${currentDirectory}/Application/Interfaces/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        const program: Program = { builder: ["builder.Services.AddAzure(builder.Configuration);"], apps: [] }

        updateProgram(program)
    })
}