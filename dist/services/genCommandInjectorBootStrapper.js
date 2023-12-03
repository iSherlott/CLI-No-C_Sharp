"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCommandInjectorBootStrapper = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function genCommandInjectorBootStrapper(data) {
    try {
        const currentDirectory = process.cwd();
        const filePath = path_1.default.join(currentDirectory, "IoC", "NativeInjectorBootStrapper.cs");
        const newData = {
            repositories: [
                `services.AddScoped<I${data["title"]}Repository, ${data["title"]}Repository>();`
            ],
            handlers: [
                `services.AddTransient<${data["title"]}Handler>();`
            ]
        };
        const lines = fs_1.default.readFileSync(filePath, 'utf-8').split('\n');
        const newContent = [];
        let foundArea = false;
        for (const line of lines) {
            newContent.push(line);
            if (line.includes("/* repositories */")) {
                foundArea = true;
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.repositories) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
            if (line.includes("/* handlers */")) {
                foundArea = true;
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.handlers) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
        }
        if (!foundArea) {
            newContent.push('\n/* repositories */');
            for (const newInfo of newData.repositories) {
                newContent.push(newInfo);
            }
            newContent.push('\n/* handlers */');
            for (const newInfo of newData.handlers) {
                newContent.push(newInfo);
            }
        }
        fs_1.default.writeFileSync(filePath, newContent.join('\n'));
        console.log('InjectorBootStrapper updated successfully!');
    }
    catch (error) {
        console.error('Error generating InjectorBootStrapper:', error);
    }
}
exports.genCommandInjectorBootStrapper = genCommandInjectorBootStrapper;
