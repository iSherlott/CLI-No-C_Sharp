"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInitCommand = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const Mustache = require('mustache');
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
const readFile_1 = require("../utils/readFile");
function setupInitCommand(program) {
    program
        .command('new <nomeProject>')
        .description('Initialize a new project')
        .action((nomeProject) => {
        initializeProjectStructure(nomeProject);
    });
}
exports.setupInitCommand = setupInitCommand;
function initializeProjectStructure(nomeProject) {
    const currentDirectory = process.cwd();
    const projectPath = path_1.default.join(currentDirectory, nomeProject);
    const foldersToCreate = [
        'API/Configurations',
        'API/Controllers',
        'API/Properties',
        'Domain/Commands',
        'Domain/Commands/Contracts',
        'Domain/Entities',
        'Domain/Handlers',
        'Domain/Handlers/Contracts',
        'Domain/Repositories',
        'Domain/Validation',
        'Infrastructure/Configuration',
        'Infrastructure/Data',
        'Infrastructure/Data/Mappings',
        'IoC',
    ];
    try {
        const rootFolderPath = path_1.default.join(__dirname, '../template');
        const template = (0, readFile_1.processDirectory)(rootFolderPath);
        fs_1.default.mkdirSync(projectPath);
        for (const folder of foldersToCreate) {
            fs_1.default.mkdirSync(`${projectPath}/${folder}`, { recursive: true });
        }
        template.forEach((elem) => {
            const data = {};
            const file = Mustache.render(elem.content, data);
            const fileName = elem.target == "/Template.sln" ? `/${capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nomeProject)}.sln` : elem.target;
            fs_1.default.writeFileSync(projectPath + fileName, file);
        });
        console.log(`Projeto '${capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nomeProject)}' inicializado com sucesso.`);
    }
    catch (error) {
        console.error('Erro ao inicializar o projeto:', error);
    }
}
