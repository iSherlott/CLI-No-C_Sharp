import { Command } from 'commander';

import { initializeProjectStructure } from '../services/initializeProjectStructure';

export function setupInitCommand(program: Command) {
    program
        .command('new <nomeProject>')
        .description('Initialize a new project')
        .action((nomeProject) => {
            initializeProjectStructure(nomeProject);
        });
}


