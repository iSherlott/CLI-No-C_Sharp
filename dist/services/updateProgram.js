"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProgram = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
async function updateProgram(newData) {
    try {
        const currentDirectory = process.cwd();
        const filePath = path_1.default.join(currentDirectory, "API", "Program.cs");
        const lines = (0, fs_1.readFileSync)(filePath, 'utf-8').split('\n');
        const newContent = [];
        for (const line of lines) {
            newContent.push(line);
            if (line.includes("#region Builder")) {
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.builder) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
            if (line.includes("#region Apps")) {
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.apps) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
        }
        (0, fs_1.writeFileSync)(filePath, newContent.join('\n'));
        console.log('Program.cs updated successfully!');
    }
    catch (error) {
        console.error('Error generating Program.cs:', error);
    }
}
exports.updateProgram = updateProgram;
