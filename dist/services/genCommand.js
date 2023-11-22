"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCommand = void 0;
const mustache_1 = __importDefault(require("mustache"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const readFile_1 = require("../utils/readFile");
const structure_1 = require("../utils/structure");
function genCommand(data) {
    try {
        const rootFolderPath = path_1.default.join(__dirname, '../../template/command/Command.cs');
        const template = (0, readFile_1.readFile)(rootFolderPath);
        const entity = new structure_1.Structure(data["content"]);
        const renderedTemplate = mustache_1.default.render(template["content"], {
            name: data["type"] + data["name"] + "Command",
            id: data["id"],
            structureConstructor: entity.structureConstructor(),
            structureEntityThis: "\n" + entity.structureEntityThis(),
            structureEntityPublic: "\n" + entity.structureEntityPublic()
        });
        const currentDirectory = process.cwd();
        const fileName = data["type"] + data["name"] + "Command.cs";
        const encapsulation = data["name"] + "Commands";
        const pathCommand = path_1.default.join(currentDirectory, "Domain", "Commands");
        fs_1.default.mkdirSync(`${currentDirectory}/Domain/Commands/${encapsulation}`, { recursive: true });
        const projectPath = path_1.default.join(pathCommand, encapsulation, fileName);
        try {
            const fileExist = fs_1.default.existsSync(projectPath);
            fs_1.default.writeFileSync(projectPath, renderedTemplate);
            if (fileExist)
                console.log(`Command ${data["type"]} '${data["name"]}' Atualizado com sucesso.`);
            else
                console.log(`Command ${data["type"]} '${data["name"]}' Criada com sucesso.`);
        }
        catch (error) {
            console.error('Invalid Local \n', error.message);
        }
    }
    catch (error) {
        console.error('Erro ao gerar a command:', error);
    }
}
exports.genCommand = genCommand;
