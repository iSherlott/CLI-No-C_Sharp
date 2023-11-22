export interface Command {
    commandName: string;
    isFirst?: boolean
}

export default interface Handler {
    title: string,
    name: string,
    repository: boolean;
    command?: Command[];
    content: string[]
}
