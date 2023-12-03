export class Structure {
    private entity: Record<string, string> = {}

    constructor(fields: string[]) {
        fields.forEach((field) => {
            const [fieldName, fieldType] = field.split(':');
            const trimmedFieldName = fieldName.trim();
            const trimmedFieldType = fieldType ? fieldType.trim() : 'string';

            this.isCSharpPrimitiveType(trimmedFieldType);

            this.entity[trimmedFieldName] = this.detectSpecialTypes(trimmedFieldType);
        });
    }

    public detectSpecialTypes(type: string): string {
        switch (type) {
            case "guid":
                return "Guid"
            case "datetime":
                return "DateTime"
            default:
                return type
        }
    }

    public structureConstructor(): string {
        let result = [];
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result.push(`${this.entity[key]} ${key}`);
            }
        }
        return result.join(", ");
    }

    public structureEntityThis(): string {
        let result = "";
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result += `            this.${key} = ${key};\n`;
            }
        }
        return result;
    }

    public structureEntityPublic(): string {
        let result = "";
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result += `        public ${this.entity[key]} ${key} { get; set; }\n`;
            }
        }
        return result;
    }

    public isCSharpPrimitiveType(type: string): void {
        const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte', 'datetime'];

        if (!csharpPrimitiveTypes.includes(type.replace('?', ''))) {
            throw new Error(`Tipo inválido: ${type}`);
        }
    }
}
