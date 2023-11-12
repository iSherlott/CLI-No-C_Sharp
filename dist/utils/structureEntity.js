"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureEntity = void 0;
class StructureEntity {
    entity = {};
    constructor(fields) {
        fields.forEach((field) => {
            const [fieldName, fieldType] = field.split(':');
            const trimmedFieldName = fieldName.trim();
            const trimmedFieldType = fieldType.toLowerCase().trim();
            this.isCSharpPrimitiveType(trimmedFieldType);
            this.entity[trimmedFieldName] = trimmedFieldType;
        });
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
        const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte'];
        if (!csharpPrimitiveTypes.includes(type)) {
            throw new Error(`Invalid type: ${type}`);
        }
    }
}
exports.StructureEntity = StructureEntity;
