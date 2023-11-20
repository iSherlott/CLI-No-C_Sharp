export interface Command {
    commandName: string;
    isFirst?: boolean
}

export default interface Repository {
    name: string;
    command?: Command[];
    content: string[];
}
