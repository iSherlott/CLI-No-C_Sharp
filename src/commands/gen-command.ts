import { Command } from 'commander';
import fs from 'fs';
import GenEntityController from '../controllers/gen-entity.controller';

export function setupGenCommand(program: Command) {
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

            if (!fs.existsSync(entryFile)) {
                console.error(`O arquivo de entrada especificado (${entryFile}) não foi encontrado.`);
                process.exit(1);
            }

            const argumentsJSON: any = {};
            if (variadic && variadic.length > 0) {
                variadic.forEach((arg: any) => {
                    const [name, type] = arg.split(':');

                    if (isCSharpPrimitiveType(type)) {
                        argumentsJSON[name] = type;
                    } else {
                        console.error(`Tipo '${type}' não é um tipo primitivo do C#.`);
                    }
                });
            }

            GenEntityController.exec({ fName: nomeEntidade }, entryFile + "/", argumentsJSON);
        });
}

function isCSharpPrimitiveType(type: any) {
    const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte'];
    return csharpPrimitiveTypes.includes(type);
}