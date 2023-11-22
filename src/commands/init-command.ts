import { Command } from 'commander';

import { initializeProjectStructure } from '../services/initializeProjectStructure';

export function setupInitCommand(program: Command) {
    program
        .command('new <nameProject>')
        .description('Initialize a new project')
        .action((nameProject) => {
            initializeProjectStructure(nameProject);
        });
}


