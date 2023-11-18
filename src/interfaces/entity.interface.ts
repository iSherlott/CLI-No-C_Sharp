export interface Database {
    table: string,
    schema: string
}

export default interface Entity {
    name: string,
    content: string[],
    postgres?: Database,
    baseSkip?: boolean
}
