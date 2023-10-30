"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const gen_entity_service_1 = __importDefault(require("../services/gen-entity.service"));
class GenEntityController {
    exec(options, path, argumentsJSON) {
        try {
            const content = gen_entity_service_1.default.generateFileContent(options.fName, argumentsJSON);
            const fileName = `${options.fName}Entity.cs`;
            fs_1.default.writeFileSync(path + fileName, content);
            console.log(`Arquivo '${fileName}' com a entidade '${options.fName}' foi criado com sucesso.`);
        }
        catch (error) {
            console.error('Erro ao criar o arquivo e a entidade:', error);
        }
    }
}
exports.default = new GenEntityController();
