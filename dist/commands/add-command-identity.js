"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupIdentityAdd = void 0;
const fs_1 = require("fs");
const genCommandSolution_1 = require("../services/genCommandSolution");
const updateItemGroup_1 = require("../services/updateItemGroup");
const addIdentity_1 = require("../services/addIdentity");
function setupIdentityAdd(parentCommand) {
    parentCommand.command('identity')
        .description('Add identity in project')
        .action(async () => {
        const currentDirectory = process.cwd();
        const files = await fs_1.promises.readdir(currentDirectory);
        if (files.includes("Identity"))
            return console.log("Identity already exist");
        await (0, addIdentity_1.addIdentity)();
        (0, genCommandSolution_1.genCommandSolution)("Identity");
        (0, updateItemGroup_1.updateItemGroup)("API", [`<ProjectReference Include="..\\Identity\\Identity.csproj" />`]);
    });
}
exports.setupIdentityAdd = setupIdentityAdd;
