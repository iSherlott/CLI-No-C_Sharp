import path from "path";

import { mkdirSync, writeFileSync, copyFileSync, unlinkSync } from 'fs';
import { processDirectory } from '../utils/readFile';
import { updateProgram } from "./updateProgram";

import Program from "../interfaces/program.interface";

const Mustache = require('mustache');

export async function addIdentity() {
    const currentDirectory = process.cwd();

    const projectPath = path.join(currentDirectory, "Identity");

    const foldersToCreate = [
        "Configuration",
        "Data",
        "Models",
        "Services",
    ]

    const rootFolderPath: string = path.join(__dirname, '../../template/add/identity');
    const template = processDirectory(rootFolderPath);

    mkdirSync(projectPath);

    for (const folder of foldersToCreate) {
        mkdirSync(`${projectPath}/${folder}`, { recursive: true });
    }

    template.forEach((elem: any) => {
        const data = {}

        const file = Mustache.render(elem.content, data);

        const fileName = elem.target.split("/identity/")[1];
        const filePath = `${projectPath}/${fileName}`;

        writeFileSync(filePath, file);

        if (fileName === 'IdentitySettings.cs') {
            const targetPath = `${currentDirectory}/API/Configurations/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        if (fileName === 'IIdentityService.cs') {
            const targetPath = `${currentDirectory}/Application/Interfaces/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        if (fileName === 'RegisterAspNetUsersRequest.cs') {
            const targetPath = `${currentDirectory}/Application/DTOs/Request/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        if (fileName === 'RegisterAspNetUsersResponse.cs') {
            const targetPath = `${currentDirectory}/Application/DTOs/Response/${fileName}`;
            copyFileSync(filePath, targetPath);

            unlinkSync(filePath);
        }

        const program: Program = { builder: ["builder.Services.AddIdentity(builder.Configuration);"], apps: [] }

        updateProgram(program)
    })
}