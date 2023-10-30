export default interface Controller {
    nome: string;
    descricao: string;
    exec(options: Record<string, any>, path: string): void;
}
