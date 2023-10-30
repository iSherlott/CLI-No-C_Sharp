import fs from 'fs';
import genEntityService from '../services/gen-entity.service';

class GenEntityController {
    exec(options: { fName: string }, path: string, argumentsJSON: Record<string, string>): void {
        try {
            const content = genEntityService.generateFileContent(options.fName, argumentsJSON);
            const fileName = `${options.fName}Entity.cs`;
            fs.writeFileSync(path + fileName, content);

            console.log(`Arquivo '${fileName}' com a entidade '${options.fName}' foi criado com sucesso.`);
        } catch (error) {
            console.error('Erro ao criar o arquivo e a entidade:', error);
        }
    }
}

export default new GenEntityController();
