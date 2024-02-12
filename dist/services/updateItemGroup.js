"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItemGroup = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
async function updateItemGroup(project, newData) {
    try {
        const currentDirectory = process.cwd();
        const filePath = path_1.default.join(currentDirectory, project, project + ".csproj");
        const lines = (0, fs_1.readFileSync)(filePath, 'utf-8').split('\n');
        const newContent = [];
        for (const line of lines) {
            newContent.push(line);
            if (line.includes(`<!--ItemGroup-->`)) {
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
        }
        (0, fs_1.writeFileSync)(filePath, newContent.join('\n'));
        console.log(project, 'updated successfully!');
    }
    catch (error) {
        console.error('Error generating Program.cs:', error);
    }
}
exports.updateItemGroup = updateItemGroup;
