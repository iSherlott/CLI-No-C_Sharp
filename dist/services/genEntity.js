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
const structureEntity_1 = require("../utils/structureEntity");
function genEntity(data) {
    try {
        const rootFolderPath = path_1.default.join(__dirname, '../../template/entity/Entity.cs');
        const template = (0, readFile_1.readFile)(rootFolderPath);
        const entity = new structureEntity_1.StructureEntity(data["content"]);
        const renderedTemplate = mustache_1.default.render(template["content"], {
            name: data["name"],
            database: data["postgres"] ? `[Table("${data["postgres"]["table"]}", Schema = "${data["postgres"]["schema"]}")]` : null,
            structureEntityThis: "\n" + entity.structureEntityThis(),
            structureEntityPublic: "\n" + entity.structureEntityPublic()
        });
        const currentDirectory = process.cwd();
        const fileName = data["name"] + ".cs";
        const projectPath = path_1.default.join(currentDirectory, "Domain", "Entities", fileName);
        try {
            fs_1.default.writeFileSync(projectPath, renderedTemplate);
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
