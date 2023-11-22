import Mustache from "mustache";

import path from "path";
import Command from "../interfaces/command.interface";

import fs from 'fs';

import { readFile } from "../utils/readFile";

import { Structure } from "../utils/structure";


export function genCommand(data: Command) {

    try {
        const rootFolderPath: string = path.join(__dirname, '../../template/command/Command.cs');
        const template = readFile(rootFolderPath);

        const entity = new Structure(data["content"]);

        const renderedTemplate = Mustache.render(template["content"], {
            name: data["type"] + data["name"] + "Command",
            id: data["id"],
            structureConstructor: entity.structureConstructor(),
            structureEntityThis: "\n" + entity.structureEntityThis(),
            structureEntityPublic: "\n" + entity.structureEntityPublic()
        })

        const currentDirectory = process.cwd();
        const fileName = data["type"] + data["name"] + "Command.cs"
        const encapsulation = data["name"] + "Commands"
        const pathCommand = path.join(currentDirectory, "Domain", "Commands")

        fs.mkdirSync(`${currentDirectory}/Domain/Commands/${encapsulation}`, { recursive: true });

        const projectPath = path.join(pathCommand, encapsulation, fileName);

        try {
            const fileExist = fs.existsSync(projectPath);
            fs.writeFileSync(projectPath, renderedTemplate);

            if (fileExist) console.log(`Command ${data["type"]} '${data["name"]}' Atualizado com sucesso.`);
            else console.log(`Command ${data["type"]} '${data["name"]}' Criada com sucesso.`);
        } catch (error: any) {
            console.error('Invalid Local \n', error.message);
        }
    }
    catch (error) {
        console.error('Erro ao gerar a command:', error);
    }
}