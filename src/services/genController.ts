import Mustache from "mustache";

import path from "path";
import Controller from "../interfaces/controller.interface";

import { readFile } from "../utils/readFile";

import fs from 'fs';


export function genController(data: Controller) {
    try {
        const rootFolderPath: string = path.join(__dirname, '../../template/controller/Controller.cs');
        const template = readFile(rootFolderPath);

        const currentDirectory = process.cwd();

        data["command"] = fs.readdirSync(path.join(currentDirectory, "Domain", "Commands", data["title"] + "Commands"));

        const renderedTemplate = Mustache.render(template["content"], data);

        const fileName = data["title"] + "Controller.cs";
        const projectPath = path.join(currentDirectory, "API", "Controllers", fileName);

        try {
            const fileExist = fs.existsSync(projectPath);
            fs.writeFileSync(projectPath, renderedTemplate);

            if (fileExist) console.log(`Controller '${data["title"]}' Atualizado com sucesso.`);
            else console.log(`Controller '${data["title"]}' Criada com sucesso.`);
        } catch (error: any) {
            console.error('Invalid Local \n', error.message);
        }
    } catch (error) {
        console.error('Erro ao gerar a controller:', error);
    }
}