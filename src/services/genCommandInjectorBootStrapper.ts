import Mustache from "mustache";

import path from "path";

import fs from 'fs';


export function genCommandInjectorBootStrapper(data: any) {
    try {
        const currentDirectory = process.cwd();
        const filePath: string = path.join(currentDirectory, "IoC", "NativeInjectorBootStrapper.cs");

        const newData = {
            repositories: [
                `services.AddScoped<I${data["title"]}Repository, ${data["title"]}Repository>();`
            ],
            handlers: [
                `services.AddTransient<${data["title"]}Handler>();`
            ]
        };

        const lines: string[] = fs.readFileSync(filePath, 'utf-8').split('\n');

        const newContent: string[] = [];
        let foundArea = false;

        for (const line of lines) {
            newContent.push(line);

            if (line.includes("#region Repositories")) {
                foundArea = true;

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.repositories) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }

            if (line.includes("#region Handlers")) {
                foundArea = true;

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.handlers) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }
        }

        if (!foundArea) {
            newContent.push('\n#region Repositories');
            for (const newInfo of newData.repositories) {
                newContent.push(newInfo);
            }

            newContent.push('\n#region Handlers');
            for (const newInfo of newData.handlers) {
                newContent.push(newInfo);
            }
        }

        fs.writeFileSync(filePath, newContent.join('\n'));

        console.log('InjectorBootStrapper updated successfully!');
    } catch (error) {
        console.error('Error generating InjectorBootStrapper:', error);
    }
}