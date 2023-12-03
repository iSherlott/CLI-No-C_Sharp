export interface Command {
    commandName: string;
    isFirst?: boolean;
    isUpdateCommand?: boolean;
}

export default interface Handler {
    title: string,
    name: string,
    repository: boolean;
    command?: Command[];
    content: string[];
}
