import { Command } from 'commander';

import { promises as fsPromises, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { genCommandSolution } from '../services/genCommandSolution';

import { updateItemGroup } from '../services/updateItemGroup';
import { addAzure } from '../services/addAzure';

export function setupAzureAdd(parentCommand: Command) {
    parentCommand.command('azure')
        .description('Add azure in project')
        .action(async () => {
            const currentDirectory = process.cwd();
            const files = await fsPromises.readdir(currentDirectory);

            if (files.includes("Azure")) return console.log("Azure already exist")

            await addAzure();

            genCommandSolution("Azure");

            updateItemGroup("API", [`<ProjectReference Include="..\\Azure\\Azure.csproj" />`]);
        });
}