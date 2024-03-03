import { readFileSync, writeFileSync } from 'fs';

import path from 'path';

import Program from '../interfaces/program.interface';


export async function updateProgram(newData: Program) {
    try {
        const currentDirectory = process.cwd();
        const filePath: string = path.join(currentDirectory, "API", "Program.cs");

        const lines: string[] = readFileSync(filePath, 'utf-8').split('\n');

        const newContent: string[] = [];

        for (const line of lines) {
            newContent.push(line);

            if (line.includes("#region Builder")) {

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.builder) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }

            if (line.includes("#region Apps")) {

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.apps) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }
        }

        writeFileSync(filePath, newContent.join('\n'));

        console.log('Program.cs updated successfully!');
    } catch (error) {
        console.error('Error generating Program.cs:', error);
    }
}