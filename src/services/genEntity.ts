import Mustache from "mustache";

import path from "path";
import Entity from "../interfaces/entity.interface";


import { readFile } from "../utils/readFile";

import fs from 'fs';

import { StructureEntity } from "../utils/structureEntity";

export function genEntity(data: Entity) {

    try {
        const rootFolderPath: string = path.join(__dirname, '../../template/entity/Entity.cs');
        const template = readFile(rootFolderPath);

        const entity = new StructureEntity(data["content"]);

        const renderedTemplate = Mustache.render(template["content"], {
            name: data["name"],
            database: data["postgres"] ? `[Table("${data["postgres"]["table"]}", Schema = "${data["postgres"]["schema"]}")]` : null,
            structureConstructor: entity.structureConstructor(),
            structureEntityThis: "\n" + entity.structureEntityThis(),
            structureEntityPublic: "\n" + entity.structureEntityPublic()
        });

        const currentDirectory = process.cwd();
        const fileName = data["name"] + ".cs"
        const projectPath = path.join(currentDirectory, "Domain", "Entities", fileName);

        try {
            fs.writeFileSync(projectPath, renderedTemplate);
        } catch (error: any) {
            console.error('Invalid Local \n', error.message);
        }

        console.log(`Entity '${data["name"]}' Criada com sucesso.`);
    } catch (error) {
        console.error('Erro ao gerar a entidade:', error);
    }
}