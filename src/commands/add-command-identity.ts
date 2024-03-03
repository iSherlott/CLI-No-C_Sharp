import { Command } from 'commander';

import { promises as fsPromises, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { genCommandSolution } from '../services/genCommandSolution';

import { updateItemGroup } from '../services/updateItemGroup';
import { addIdentity } from '../services/addIdentity';

export function setupIdentityAdd(parentCommand: Command) {
    parentCommand.command('identity')
        .description('Add identity in project')
        .action(async () => {
            const currentDirectory = process.cwd();
            const files = await fsPromises.readdir(currentDirectory);

            if (files.includes("Identity")) return console.log("Identity already exist")

            await addIdentity();

            genCommandSolution("Identity");

            updateItemGroup("API", [`<ProjectReference Include="..\\Identity\\Identity.csproj" />`]);
        });
}