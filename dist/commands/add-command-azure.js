"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAzureAdd = void 0;
const fs_1 = require("fs");
const genCommandSolution_1 = require("../services/genCommandSolution");
const updateItemGroup_1 = require("../services/updateItemGroup");
const addAzure_1 = require("../services/addAzure");
function setupAzureAdd(parentCommand) {
    parentCommand.command('azure')
        .description('Add azure in project')
        .action(async () => {
        const currentDirectory = process.cwd();
        const files = await fs_1.promises.readdir(currentDirectory);
        if (files.includes("Azure"))
            return console.log("Azure already exist");
        await (0, addAzure_1.addAzure)();
        (0, genCommandSolution_1.genCommandSolution)("Azure");
        (0, updateItemGroup_1.updateItemGroup)("API", [`<ProjectReference Include="..\\Azure\\Azure.csproj" />`]);
    });
}
exports.setupAzureAdd = setupAzureAdd;
