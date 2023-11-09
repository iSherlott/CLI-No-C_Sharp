"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInitCommand = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const gen_init_ioc_service_1 = require("../services/gen-init-ioc-service");
const gen_gitignore_service_1 = __importDefault(require("../services/gen-gitignore.service"));
const gen_gitattributes_services_1 = __importDefault(require("../services/gen-gitattributes.services"));
const gen_LICENSE_serives_1 = __importDefault(require("../services/gen-LICENSE.serives"));
const gen_init_solution_services_1 = __importDefault(require("../services/gen-init-solution-services"));
const gen_init_infra_services_1 = require("../services/gen-init-infra-services");
const gen_init_domain_services_1 = require("../services/gen-init-domain-services");
const gen_init_api_services_1 = require("../services/gen-init-api-services");
const capitalizeFirstLetter_1 = require("../utils/capitalizeFirstLetter");
function setupInitCommand(program) {
    program
        .command('new <nomeProject>')
        .description('Initialize a new project')
        .action((nomeProject) => {
        initializeProjectStructure(nomeProject);
    });
}
exports.setupInitCommand = setupInitCommand;
function initializeProjectStructure(nomeProject) {
    const currentDirectory = process.cwd();
    const projectPath = path_1.default.join(currentDirectory, nomeProject);
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
        fs_1.default.mkdirSync(projectPath);
        for (const folder of foldersToCreate) {
            fs_1.default.mkdirSync(`${projectPath}/${folder}`, { recursive: true });
        }
        const gitattributes = gen_gitattributes_services_1.default;
        fs_1.default.writeFileSync(projectPath + '/.gitattributes', gitattributes);
        fs_1.default.writeFileSync(projectPath + `/${capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nomeProject)}.sln`, gen_init_solution_services_1.default);
        const gitignore = gen_gitignore_service_1.default;
        fs_1.default.writeFileSync(projectPath + '/.gitignore', gitignore);
        const license = gen_LICENSE_serives_1.default;
        fs_1.default.writeFileSync(projectPath + '/LICENSE.txt', license);
        const ioc = path_1.default.join(projectPath, "IoC");
        const injectorBootStrapperCode = gen_init_ioc_service_1.InitIoC.nativeInjectorBootStrapperCode();
        fs_1.default.writeFileSync(ioc + '/NativeInjectorBootStrapper.cs', injectorBootStrapperCode);
        const ioCProjectFile = gen_init_ioc_service_1.InitIoC.generateIoCProjectFile();
        fs_1.default.writeFileSync(ioc + '/IoC.csproj', ioCProjectFile);
        const infra = path_1.default.join(projectPath, "Infrastructure");
        const infraProjectFile = gen_init_infra_services_1.InitInfra.nativeInfrastructure();
        fs_1.default.writeFileSync(infra + '/Infrastructure.csproj', infraProjectFile);
        const databaseConfig = gen_init_infra_services_1.InitInfra.nativeDatabaseConfig();
        fs_1.default.writeFileSync(infra + '/Configuration/DatabaseConfig.cs', databaseConfig);
        const applicationDbContext = gen_init_infra_services_1.InitInfra.nativeApplicationDbContext();
        fs_1.default.writeFileSync(infra + '/Data/ApplicationDbContext.cs', applicationDbContext);
        const domain = path_1.default.join(projectPath, "Domain");
        const domainProjectFile = gen_init_domain_services_1.InitDomain.nativeDomain();
        fs_1.default.writeFileSync(domain + '/Domain.csproj', domainProjectFile);
        const commandResult = gen_init_domain_services_1.InitDomain.nativeCommandResult();
        fs_1.default.writeFileSync(domain + '/Commands/commandResult.cs', commandResult);
        const iCommand = gen_init_domain_services_1.InitDomain.nativeICommand();
        fs_1.default.writeFileSync(domain + '/Commands/Contracts/ICommand.cs', iCommand);
        const iCommandResult = gen_init_domain_services_1.InitDomain.nativeICommandResult();
        fs_1.default.writeFileSync(domain + '/Commands/Contracts/ICommandResult.cs', iCommandResult);
        const baseEntity = gen_init_domain_services_1.InitDomain.nativeBaseEntity();
        fs_1.default.writeFileSync(domain + '/Entities/BaseEntity.cs', baseEntity);
        const iHandler = gen_init_domain_services_1.InitDomain.nativeIHandler();
        fs_1.default.writeFileSync(domain + '/Handlers/Contracts/IHandler.cs', iHandler);
        const validation = gen_init_domain_services_1.InitDomain.nativeValidation();
        fs_1.default.writeFileSync(domain + '/Validation/Validation.cs', validation);
        const validatableTypes = gen_init_domain_services_1.InitDomain.nativeValidatableTypes();
        fs_1.default.writeFileSync(domain + '/Validation/ValidatableTypes.cs', validatableTypes);
        const api = path_1.default.join(projectPath, "API");
        const apiProjectFile = gen_init_api_services_1.InitAPI.nativeAPI();
        fs_1.default.writeFileSync(api + '/API.csproj', apiProjectFile);
        const program = gen_init_api_services_1.InitAPI.nativeProgram();
        fs_1.default.writeFileSync(api + '/Program.cs', program);
        const appsettingsD = gen_init_api_services_1.InitAPI.nativeAppsettingsD();
        fs_1.default.writeFileSync(api + '/appsettings.Development.json', JSON.stringify(appsettingsD));
        const appsettings = gen_init_api_services_1.InitAPI.nativeAppsettingsD();
        fs_1.default.writeFileSync(api + '/appsettings.json', JSON.stringify(appsettings));
        const launchSettings = gen_init_api_services_1.InitAPI.propertiesLaunchSettings();
        fs_1.default.writeFileSync(api + "/Properties/launchSettings.json", JSON.stringify(launchSettings));
        const homeController = gen_init_api_services_1.InitAPI.homeController();
        fs_1.default.writeFileSync(api + "/Controllers/HomeCOntroller.cs", homeController);
        const DependecyInjectionConfig = gen_init_api_services_1.InitAPI.DependecyInjectionConfig();
        fs_1.default.writeFileSync(api + "/Configurations/DependecyInjectionConfig.cs", DependecyInjectionConfig);
        console.log(`Projeto '${capitalizeFirstLetter_1.StringUtils.capitalizeFirstLetter(nomeProject)}' inicializado com sucesso.`);
    }
    catch (error) {
        console.error('Erro ao inicializar o projeto:', error);
    }
}
