"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genController = void 0;
const mustache_1 = __importDefault(require("mustache"));
const path_1 = __importDefault(require("path"));
const readFile_1 = require("../utils/readFile");
const fs_1 = __importDefault(require("fs"));
function genController(data) {
    try {
        const rootFolderPath = path_1.default.join(__dirname, '../../template/controller/Controller.cs');
        const template = (0, readFile_1.readFile)(rootFolderPath);
        const currentDirectory = process.cwd();
        data["command"] = fs_1.default.readdirSync(path_1.default.join(currentDirectory, "Domain", "Commands", data["title"] + "Commands"));
        const renderedTemplate = mustache_1.default.render(template["content"], data);
        const fileName = data["title"] + "Controller.cs";
        const projectPath = path_1.default.join(currentDirectory, "API", "Controllers", fileName);
        try {
            const fileExist = fs_1.default.existsSync(projectPath);
            fs_1.default.writeFileSync(projectPath, renderedTemplate);
            if (fileExist)
                console.log(`Controller '${data["title"]}' Atualizado com sucesso.`);
            else
                console.log(`Controller '${data["title"]}' Criada com sucesso.`);
        }
        catch (error) {
            console.error('Invalid Local \n', error.message);
        }
    }
    catch (error) {
        console.error('Erro ao gerar a controller:', error);
    }
}
exports.genController = genController;
