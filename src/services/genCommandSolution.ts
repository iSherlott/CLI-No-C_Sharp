import { promises as fsPromises, readFileSync, writeFileSync } from 'fs';
import generateGuid from '../utils/generateGuid';


export async function genCommandSolution(ProjectName: string) {
    try {
        const currentDirectory = process.cwd();

        const files = await fsPromises.readdir(currentDirectory);
        const filePath = files.filter(file => file.endsWith('.sln'));

        const fileContent: string = readFileSync(filePath[0], 'utf-8');

        const projectRegex = /Project\("{([^"]+)"\)\s*=\s*"[^"]+",\s*"[^"]+",\s*"{([^"]+)}"/;
        const match = projectRegex.exec(fileContent);

        const projectGuid = match ? match[1].replace("}", "") : null;
        const guid = generateGuid();

        const newData = {
            newProject: [
                `Project("{${projectGuid}}") = "${ProjectName}", "${ProjectName}\\${ProjectName}.csproj", "{${guid}}"`
            ],
            newCPU: [
                `{${guid}}.Debug|Any CPU.ActiveCfg = Debug|Any CPU`,
                `{${guid}}.Debug|Any CPU.Build.0 = Debug|Any CPU`,
                `{${guid}}.Release|Any CPU.ActiveCfg = Release|Any CPU`,
                `{${guid}}.Release|Any CPU.Build.0 = Release|Any CPU`
            ]
        };

        const lines: string[] = readFileSync(filePath[0], 'utf-8').split('\n');
        const newContent: string[] = [];

        for (const line of lines) {
            newContent.push(line);

            if (line.includes("#region newProject")) {

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.newProject) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }

            if (line.includes("#region newCPU")) {

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.newCPU) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }
        }

        writeFileSync(filePath[0], newContent.join('\n'));

        console.log('Project add successfully!');
    } catch (error) {
        console.error('Error generating ApplicationDbContext:', error);
    }
}