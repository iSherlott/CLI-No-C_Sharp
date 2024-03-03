"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCommandSolution = void 0;
const fs_1 = require("fs");
const generateGuid_1 = __importDefault(require("../utils/generateGuid"));
async function genCommandSolution(ProjectName) {
    try {
        const currentDirectory = process.cwd();
        const files = await fs_1.promises.readdir(currentDirectory);
        const filePath = files.filter(file => file.endsWith('.sln'));
        const fileContent = (0, fs_1.readFileSync)(filePath[0], 'utf-8');
        const projectRegex = /Project\("{([^"]+)"\)\s*=\s*"[^"]+",\s*"[^"]+",\s*"{([^"]+)}"/;
        const match = projectRegex.exec(fileContent);
        const projectGuid = match ? match[1].replace("}", "") : null;
        const guid = (0, generateGuid_1.default)();
        const newData = {
            newProject: [
                `Project("{${projectGuid}}") = "${ProjectName}", "${ProjectName}\\${ProjectName}.csproj", "{${guid}}"`
            ],
            newCPU: [
                `{${guid}}.Debug|Any CPU.ActiveCfg = Debug|Any CPU`,
                `{${guid}}.Debug|Any CPU.Build.0 = Debug|Any CPU`,
                `{${guid}}.Release|Any CPU.ActiveCfg = Release|Any CPU`,
                `{${guid}}.Release|Any CPU.Build.0 = Release|Any CPU`
            ]
        };
        const lines = (0, fs_1.readFileSync)(filePath[0], 'utf-8').split('\n');
        const newContent = [];
        for (const line of lines) {
            newContent.push(line);
            if (line.includes("#region newProject")) {
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.newProject) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
            if (line.includes("#region newCPU")) {
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.newCPU) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
        }
        (0, fs_1.writeFileSync)(filePath[0], newContent.join('\n'));
        console.log('Project add successfully!');
    }
    catch (error) {
        console.error('Error generating ApplicationDbContext:', error);
    }
}
exports.genCommandSolution = genCommandSolution;
