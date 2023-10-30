"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGenCommand = void 0;
const fs_1 = __importDefault(require("fs"));
const gen_entity_controller_1 = __importDefault(require("../controllers/gen-entity.controller"));
function setupGenCommand(program) {
    program
        .command('g <nomeEntidade> [variadic...]')
        .description('Generate an entity')
        .option('-p, --path <path>', 'Caminho para o arquivo de entrada', './assets')
        .action((nomeEntidade, variadic, options) => {
        const entryFile = options.path;
        if (!nomeEntidade) {
            console.error('O nome da entidade é obrigatório.');
            process.exit(1);
        }
        if (!fs_1.default.existsSync(entryFile)) {
            console.error(`O arquivo de entrada especificado (${entryFile}) não foi encontrado.`);
            process.exit(1);
        }
        const argumentsJSON = {};
        if (variadic && variadic.length > 0) {
            variadic.forEach((arg) => {
                const [name, type] = arg.split(':');
                if (isCSharpPrimitiveType(type)) {
                    argumentsJSON[name] = type;
                }
                else {
                    console.error(`Tipo '${type}' não é um tipo primitivo do C#.`);
                }
            });
        }
        gen_entity_controller_1.default.exec({ fName: nomeEntidade }, entryFile + "/", argumentsJSON);
    });
}
exports.setupGenCommand = setupGenCommand;
function isCSharpPrimitiveType(type) {
    const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte'];
    return csharpPrimitiveTypes.includes(type);
}
