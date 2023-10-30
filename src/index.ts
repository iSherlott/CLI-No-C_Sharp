import { Command } from 'commander';
import { setupCommands } from './setup/commands-setup';

const program = new Command();

setupCommands(program);

program.parse(process.argv);
