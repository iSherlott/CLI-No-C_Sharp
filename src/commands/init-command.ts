import path from 'path';
import fs from 'fs';

import { Command } from 'commander';

import { InitIoC } from '../services/gen-init-ioc-service';

import generateGitignore from '../services/gen-gitignore.service';
import generateGitattributes from '../services/gen-gitattributes.services';
import generateLICENSE from '../services/gen-LICENSE.serives';
import genSLN from '../services/gen-init-solution-services';

import { InitInfra } from '../services/gen-init-infra-services';
import { InitDomain } from '../services/gen-init-domain-services';
import { InitAPI } from '../services/gen-init-api-services';
import { StringUtils } from '../utils/capitalizeFirstLetter';

export function setupInitCommand(program: Command) {
    program
        .command('new <nomeProject>')
        .description('Initialize a new project')
        .action((nomeProject) => {
            initializeProjectStructure(nomeProject);
        });
}

function initializeProjectStructure(nomeProject: string) {
    const currentDirectory = process.cwd();
    const projectPath = path.join(currentDirectory, nomeProject);

    const foldersToCreate = [
        'API/Configurations',
        'API/Controllers',
        'API/Properties',
        'Domain/Commands',
        'Domain/Commands/Contracts',
        'Domain/Entities',
        'Domain/Handlers',
        'Domain/Handlers/Contracts',
        'Domain/Repositories',
        'Domain/Validation',
        'Infrastructure/Configuration',
        'Infrastructure/Data',
        'Infrastructure/Data/Mappings',
        'IoC',
    ];

    try {
        fs.mkdirSync(projectPath);

        for (const folder of foldersToCreate) {
            fs.mkdirSync(`${projectPath}/${folder}`, { recursive: true });
        }

        const gitattributes = generateGitattributes;
        fs.writeFileSync(projectPath + '/.gitattributes', gitattributes);

        fs.writeFileSync(projectPath + `/${StringUtils.capitalizeFirstLetter(nomeProject)}.sln`, genSLN);

        const gitignore = generateGitignore;
        fs.writeFileSync(projectPath + '/.gitignore', gitignore);

        const license = generateLICENSE;
        fs.writeFileSync(projectPath + '/LICENSE.txt', license);

        const ioc = path.join(projectPath, "IoC");

        const injectorBootStrapperCode = InitIoC.nativeInjectorBootStrapperCode();
        fs.writeFileSync(ioc + '/NativeInjectorBootStrapper.cs', injectorBootStrapperCode)

        const ioCProjectFile = InitIoC.generateIoCProjectFile();
        fs.writeFileSync(ioc + '/IoC.csproj', ioCProjectFile)

        const infra = path.join(projectPath, "Infrastructure");

        const infraProjectFile = InitInfra.nativeInfrastructure();
        fs.writeFileSync(infra + '/Infrastructure.csproj', infraProjectFile);

        const databaseConfig = InitInfra.nativeDatabaseConfig();
        fs.writeFileSync(infra + '/Configuration/DatabaseConfig.cs', databaseConfig);

        const applicationDbContext = InitInfra.nativeApplicationDbContext();
        fs.writeFileSync(infra + '/Data/ApplicationDbContext.cs', applicationDbContext);

        const domain = path.join(projectPath, "Domain");

        const domainProjectFile = InitDomain.nativeDomain();
        fs.writeFileSync(domain + '/Domain.csproj', domainProjectFile);

        const commandResult = InitDomain.nativeCommandResult();
        fs.writeFileSync(domain + '/Commands/commandResult.cs', commandResult);

        const iCommand = InitDomain.nativeICommand();
        fs.writeFileSync(domain + '/Commands/Contracts/ICommand.cs', iCommand);

        const iCommandResult = InitDomain.nativeICommandResult();
        fs.writeFileSync(domain + '/Commands/Contracts/ICommandResult.cs', iCommandResult);

        const baseEntity = InitDomain.nativeBaseEntity();
        fs.writeFileSync(domain + '/Entities/BaseEntity.cs', baseEntity);

        const iHandler = InitDomain.nativeIHandler();
        fs.writeFileSync(domain + '/Handlers/Contracts/IHandler.cs', iHandler);

        const validation = InitDomain.nativeValidation();
        fs.writeFileSync(domain + '/Validation/Validation.cs', validation);

        const validatableTypes = InitDomain.nativeValidatableTypes();
        fs.writeFileSync(domain + '/Validation/ValidatableTypes.cs', validatableTypes);

        const api = path.join(projectPath, "API");

        const apiProjectFile = InitAPI.nativeAPI();
        fs.writeFileSync(api + '/API.csproj', apiProjectFile);

        const program = InitAPI.nativeProgram();
        fs.writeFileSync(api + '/Program.cs', program);

        const appsettingsD = InitAPI.nativeAppsettingsD();
        fs.writeFileSync(api + '/appsettings.Development.json', JSON.stringify(appsettingsD));

        const appsettings = InitAPI.nativeAppsettingsD();
        fs.writeFileSync(api + '/appsettings.json', JSON.stringify(appsettings));

        console.log(`Projeto '${StringUtils.capitalizeFirstLetter(nomeProject)}' inicializado com sucesso.`);
    } catch (error) {
        console.error('Erro ao inicializar o projeto:', error);
    }
}

