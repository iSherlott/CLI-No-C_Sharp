"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structure = void 0;
class Structure {
    entity = {};
    constructor(fields) {
        fields.forEach((field) => {
            const [fieldName, fieldType] = field.split(':');
            const trimmedFieldName = fieldName.trim();
            const trimmedFieldType = fieldType ? fieldType.trim() : 'string';
            this.isCSharpPrimitiveType(trimmedFieldType);
            this.entity[trimmedFieldName] = this.detectSpecialTypes(trimmedFieldType);
        });
    }
    detectSpecialTypes(type) {
        switch (type) {
            case "guid":
                return "Guid";
            case "datetime":
                return "DateTime";
            default:
                return type;
        }
    }
    structureConstructor() {
        let result = [];
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result.push(`${this.entity[key]} ${key}`);
            }
        }
        return result.join(", ");
    }
    structureEntityThis() {
        let result = "";
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result += `            this.${key} = ${key};\n`;
            }
        }
        return result;
    }
    structureEntityPublic() {
        let result = "";
        for (const key in this.entity) {
            if (this.entity.hasOwnProperty(key)) {
                result += `        public ${this.entity[key]} ${key} { get; set; }\n`;
            }
        }
        return result;
    }
    isCSharpPrimitiveType(type) {
        const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte', 'datetime'];
        if (!csharpPrimitiveTypes.includes(type.replace('?', ''))) {
            throw new Error(`Tipo inválido: ${type}`);
        }
    }
}
exports.Structure = Structure;
