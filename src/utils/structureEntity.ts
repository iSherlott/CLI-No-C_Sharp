export class StructureEntity {
    private entity: Record<string, string> = {}

    constructor(fields: string[]) {

        fields.forEach((field) => {
            const [fieldName, fieldType] = field.split(':');
            const trimmedFieldName = fieldName.trim();
            const trimmedFieldType = fieldType.toLowerCase().trim();

            this.isCSharpPrimitiveType(trimmedFieldType)

            this.entity[trimmedFieldName] = trimmedFieldType
        });
    }

    public structureEntityThis(): string {
        let result = "";
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result += `         this.${key} = ${this.entity[key]};\n`;
            }
        }
        return result;
    }

    public structureEntityPublic(): string {
        let result = "";
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result += `         public ${key}: ${this.entity[key]} { get; set; }\n`;
            }
        }
        return result;
    }

    public isCSharpPrimitiveType(type: string): void {
        const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte'];

        if (!csharpPrimitiveTypes.includes(type)) {
            throw new Error(`Invalid type: ${type}`);
        }
    }
}
