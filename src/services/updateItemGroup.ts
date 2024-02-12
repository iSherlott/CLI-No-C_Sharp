import { readFileSync, writeFileSync } from 'fs';

import path from 'path';


export async function updateItemGroup(project: string, newData: string[]) {
    try {
        const currentDirectory = process.cwd();
        const filePath: string = path.join(currentDirectory, project, project + ".csproj");

        const lines: string[] = readFileSync(filePath, 'utf-8').split('\n');

        const newContent: string[] = [];

        for (const line of lines) {
            newContent.push(line);

            if (line.includes(`<!--ItemGroup-->`)) {

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }

        }

        writeFileSync(filePath, newContent.join('\n'));

        console.log(project, 'updated successfully!');
    } catch (error) {
        console.error('Error generating Program.cs:', error);
    }
}