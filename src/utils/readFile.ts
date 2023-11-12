import * as fs from 'fs';
import * as path from 'path';

interface ProcessResult {
    path: string;
    target?: string;
    content: any;
}

export function readFile(filePath: string): ProcessResult {
    const fileContent: string = fs.readFileSync(filePath, 'utf8');

    return {
        path: filePath,
        content: fileContent
    };
}

export function processFile(filePath: string): ProcessResult {
    const fileContent: string = fs.readFileSync(filePath, 'utf8');

    const relativePath: string = path.relative(path.join(__dirname, 'template'), filePath);

    const target: string = relativePath.replace(/\\/g, '/').split("/template/init")[1];

    return {
        path: filePath,
        target: target,
        content: fileContent
    };
}

export function processDirectory(directoryPath: string): ProcessResult[] {
    const files: string[] = fs.readdirSync(directoryPath);
    const results: ProcessResult[] = [];

    files.forEach((file: string) => {
        const filePath: string = path.join(directoryPath, file);

        if (fs.statSync(filePath).isDirectory()) {
            results.push(...processDirectory(filePath));
        } else {
            results.push(processFile(filePath));
        }
    });

    return results;
}