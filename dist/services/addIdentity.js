"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addIdentity = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const readFile_1 = require("../utils/readFile");
const updateProgram_1 = require("./updateProgram");
const Mustache = require('mustache');
async function addIdentity() {
    const currentDirectory = process.cwd();
    const projectPath = path_1.default.join(currentDirectory, "Identity");
    const foldersToCreate = [
        "Configuration",
        "Data",
        "Models",
        "Services",
    ];
    const rootFolderPath = path_1.default.join(__dirname, '../../template/add/identity');
    const template = (0, readFile_1.processDirectory)(rootFolderPath);
    (0, fs_1.mkdirSync)(projectPath);
    for (const folder of foldersToCreate) {
        (0, fs_1.mkdirSync)(`${projectPath}/${folder}`, { recursive: true });
    }
    template.forEach((elem) => {
        const data = {};
        const file = Mustache.render(elem.content, data);
        const fileName = elem.target.split("/identity/")[1];
        const filePath = `${projectPath}/${fileName}`;
        (0, fs_1.writeFileSync)(filePath, file);
        if (fileName === 'IdentitySettings.cs') {
            const targetPath = `${currentDirectory}/API/Configurations/${fileName}`;
            (0, fs_1.copyFileSync)(filePath, targetPath);
            (0, fs_1.unlinkSync)(filePath);
        }
        if (fileName === 'IIdentityService.cs') {
            const targetPath = `${currentDirectory}/Application/Interfaces/${fileName}`;
            (0, fs_1.copyFileSync)(filePath, targetPath);
            (0, fs_1.unlinkSync)(filePath);
        }
        if (fileName === 'RegisterAspNetUsersRequest.cs') {
            const targetPath = `${currentDirectory}/Application/DTOs/Request/${fileName}`;
            (0, fs_1.copyFileSync)(filePath, targetPath);
            (0, fs_1.unlinkSync)(filePath);
        }
        if (fileName === 'RegisterAspNetUsersResponse.cs') {
            const targetPath = `${currentDirectory}/Application/DTOs/Response/${fileName}`;
            (0, fs_1.copyFileSync)(filePath, targetPath);
            (0, fs_1.unlinkSync)(filePath);
        }
        const program = { builder: ["builder.Services.AddIdentity(builder.Configuration);"], apps: [] };
        (0, updateProgram_1.updateProgram)(program);
    });
}
exports.addIdentity = addIdentity;
