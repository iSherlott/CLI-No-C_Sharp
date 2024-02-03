"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCommandApplicationDbContext = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function genCommandApplicationDbContext(data) {
    try {
        const currentDirectory = process.cwd();
        const filePath = path_1.default.join(currentDirectory, "Infrastructure", "Data", "ApplicationDbContext.cs");
        const newData = {
            context: [
                `public DbSet<${data["title"]}Entity> ${data["title"]} { get; set; }`
            ]
        };
        const lines = fs_1.default.readFileSync(filePath, 'utf-8').split('\n');
        const newContent = [];
        let foundArea = false;
        for (const line of lines) {
            newContent.push(line);
            if (line.includes("/* DbSet */")) {
                foundArea = true;
                const indentation = line.match(/^\s*/)?.[0] || '';
                for (const newInfo of newData.context) {
                    if (!(lines.toString().includes(newInfo)))
                        newContent.push(`${indentation}${newInfo}`);
                }
            }
        }
        if (!foundArea) {
            newContent.push('\n/* DbSet */');
            for (const newInfo of newData.context) {
                newContent.push(newInfo);
            }
        }
        fs_1.default.writeFileSync(filePath, newContent.join('\n'));
        console.log('ApplicationDbContext updated successfully!');
    }
    catch (error) {
        console.error('Error generating ApplicationDbContext:', error);
    }
}
exports.genCommandApplicationDbContext = genCommandApplicationDbContext;
