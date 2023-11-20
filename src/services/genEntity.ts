import Mustache from "mustache";

import path from "path";
import Entity from "../interfaces/entity.interface";


import { readFile } from "../utils/readFile";

import fs from 'fs';

import { Structure } from "../utils/structure";

export function genEntity(data: Entity) {

    try {
        const rootFolderPath: string = path.join(__dirname, '../../template/entity/Entity.cs');
        const template = readFile(rootFolderPath);

        const entity = new Structure(data["content"]);

        const renderedTemplate = Mustache.render(template["content"], {
            name: data["name"] + "Entity",
            database: data["postgres"] ? `[Table("${data["postgres"]["table"]}", Schema = "${data["postgres"]["schema"]}")]` : null,
            structureConstructor: entity.structureConstructor(),
            structureEntityThis: "\n" + entity.structureEntityThis(),
            structureEntityPublic: "\n" + entity.structureEntityPublic(),
            baseSkip: !data["baseSkip"]
        });

        const currentDirectory = process.cwd();
        const fileName = data["name"] + "Entity.cs"
        const projectPath = path.join(currentDirectory, "Domain", "Entities", fileName);

        try {
            const fileExist = fs.existsSync(projectPath);
            fs.writeFileSync(projectPath, renderedTemplate);

            if (fileExist) console.log(`Entity '${data["name"]}' Atualizado com sucesso.`);
            else console.log(`Entity '${data["name"]}' Criada com sucesso.`);
        } catch (error: any) {
            console.error('Invalid Local \n', error.message);
        }

    } catch (error) {
        console.error('Erro ao gerar a entidade:', error);
    }
}