import path from 'path';
import fs from 'fs';

const Mustache = require('mustache');

import { processDirectory } from '../utils/readFile';
import { StringUtils } from '../utils/capitalizeFirstLetter';

export function initializeProjectStructure(nomeProject: string) {
    const currentDirectory = process.cwd();
    const projectPath = path.join(currentDirectory, nomeProject);

    const foldersToCreate = [
        'API/Configurations',
        'API/Controllers',
        'API/Properties',
        'API/Middleware',
        'Domain/Commands',
        'Domain/Commands/Contracts',
        'Domain/Entities',
        'Domain/Handlers',
        'Domain/Handlers/Contracts',
        'Domain/Repositories',
        'Domain/Repositories/Contracts',
        'Domain/Validation',
        'Domain/Enum',
        'Infrastructure/Configuration',
        'Infrastructure/Data',
        'Infrastructure/Repositories',
        'Infrastructure/Repositories/Contracts',
        'Infrastructure/Data/Mappings',
        'IoC',
    ];

    try {
        const rootFolderPath: string = path.join(__dirname, '../../template/init');
        const template = processDirectory(rootFolderPath);

        fs.mkdirSync(projectPath);

        for (const folder of foldersToCreate) {
            fs.mkdirSync(`${projectPath}/${folder}`, { recursive: true });
        }

        template.forEach((elem: any) => {
            const data = {}

            const file = Mustache.render(elem.content, data);

            const fileName = elem.target == "/Template.sln" ? `/${StringUtils.capitalizeFirstLetter(nomeProject)}.sln` : elem.target;
            fs.writeFileSync(projectPath + fileName, file);
        })

        console.log(`Projeto '${StringUtils.capitalizeFirstLetter(nomeProject)}' inicializado com sucesso.`);
    } catch (error) {
        console.error('Erro ao inicializar o projeto:', error);
    }
}
