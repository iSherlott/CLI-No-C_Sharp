import path from "path";

import fs from 'fs';


export function genCommandApplicationDbContext(data: any) {
    try {
        const currentDirectory = process.cwd();
        const filePath: string = path.join(currentDirectory, "Infrastructure", "Data", "ApplicationDbContext.cs");

        const newData = {
            context: [
                `public DbSet<${data["title"]}Entity> ${data["title"]} { get; set; }`
            ]
        };

        const lines: string[] = fs.readFileSync(filePath, 'utf-8').split('\n');

        const newContent: string[] = [];
        let foundArea = false;

        for (const line of lines) {
            newContent.push(line);

            if (line.includes("#region DbSet")) {
                foundArea = true;

                const indentation = line.match(/^\s*/)?.[0] || '';

                for (const newInfo of newData.context) {
                    if (!(lines.toString().includes(newInfo))) newContent.push(`${indentation}${newInfo}`);
                }
            }
        }

        if (!foundArea) {
            newContent.push('\n#Region DbSet');
            for (const newInfo of newData.context) {
                newContent.push(newInfo);
            }
        }

        fs.writeFileSync(filePath, newContent.join('\n'));

        console.log('ApplicationDbContext updated successfully!');
    } catch (error) {
        console.error('Error generating ApplicationDbContext:', error);
    }
}