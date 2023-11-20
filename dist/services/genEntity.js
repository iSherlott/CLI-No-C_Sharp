"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genEntity = void 0;
const mustache_1 = __importDefault(require("mustache"));
const path_1 = __importDefault(require("path"));
const readFile_1 = require("../utils/readFile");
const fs_1 = __importDefault(require("fs"));
const structure_1 = require("../utils/structure");
function genEntity(data) {
    try {
        const rootFolderPath = path_1.default.join(__dirname, '../../template/entity/Entity.cs');
        const template = (0, readFile_1.readFile)(rootFolderPath);
        const entity = new structure_1.Structure(data["content"]);
        const renderedTemplate = mustache_1.default.render(template["content"], {
            name: data["name"] + "Entity",
            database: data["postgres"] ? `[Table("${data["postgres"]["table"]}", Schema = "${data["postgres"]["schema"]}")]` : null,
            structureConstructor: entity.structureConstructor(),
            structureEntityThis: "\n" + entity.structureEntityThis(),
            structureEntityPublic: "\n" + entity.structureEntityPublic(),
            baseSkip: !data["baseSkip"]
        });
        const currentDirectory = process.cwd();
        const fileName = data["name"] + "Entity.cs";
        const projectPath = path_1.default.join(currentDirectory, "Domain", "Entities", fileName);
        try {
            const fileExist = fs_1.default.existsSync(projectPath);
            fs_1.default.writeFileSync(projectPath, renderedTemplate);
            if (fileExist)
                console.log(`Entity '${data["name"]}' Atualizado com sucesso.`);
            else
                console.log(`Entity '${data["name"]}' Criada com sucesso.`);
        }
        catch (error) {
            console.error('Invalid Local \n', error.message);
        }
    }
    catch (error) {
        console.error('Erro ao gerar a entidade:', error);
    }
}
exports.genEntity = genEntity;
