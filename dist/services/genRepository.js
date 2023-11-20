"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genRepository = void 0;
const mustache_1 = __importDefault(require("mustache"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const readFile_1 = require("../utils/readFile");
function genRepository(data) {
    try {
        const rootFolderPath = path_1.default.join(__dirname, '../../template/repositories/Repository.cs');
        const rootFolderPathInterface = path_1.default.join(__dirname, '../../template/repositories/IRepository.cs');
        const template = (0, readFile_1.readFile)(rootFolderPath);
        const templateInterface = (0, readFile_1.readFile)(rootFolderPathInterface);
        const renderedTemplate = mustache_1.default.render(template["content"], data);
        const renderedTemplateInterface = mustache_1.default.render(templateInterface["content"], data);
        const currentDirectory = process.cwd();
        const fileName = data["name"] + "Repository.cs";
        const projectPath = path_1.default.join(currentDirectory, "Infrastructure", "Repositories", fileName);
        const projectPathInterface = path_1.default.join(currentDirectory, "Domain", "Repositories", "I" + fileName);
        try {
            const fileExist = fs_1.default.existsSync(projectPath);
            fs_1.default.writeFileSync(projectPath, renderedTemplate);
            if (fileExist)
                console.log(`Repository '${data["name"]}' Atualizado com sucesso.`);
            else
                console.log(`Repository '${data["name"]}' Criada com sucesso.`);
        }
        catch (error) {
            console.error('Invalid Local \n', error.message);
        }
        try {
            const fileExist = fs_1.default.existsSync(projectPathInterface);
            fs_1.default.writeFileSync(projectPathInterface, renderedTemplateInterface);
            if (fileExist)
                console.log(`Repository Interface '${data["name"]}' Atualizado com sucesso.`);
            else
                console.log(`Repository Interface '${data["name"]}' Criada com sucesso.`);
        }
        catch (error) {
            console.error('Invalid Local \n', error.message);
        }
    }
    catch (error) {
        console.error('Erro ao gerar a entidade:', error);
    }
}
exports.genRepository = genRepository;
