"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indent = '    ';
class GenEntityService {
    generatePropertiesSection(argumentsJSON) {
        const properties = [];
        for (const [name, type] of Object.entries(argumentsJSON)) {
            properties.push(`${indent}${indent}public ${type} ${name} { get; set; }`);
        }
        return properties.join('\n');
    }
    generatePropertiesSectionSet(argumentsJSON) {
        const properties = [];
        for (const [name, type] of Object.entries(argumentsJSON)) {
            properties.push(`${indent}${indent}public void set${this.capitalizeFirstLetter(name)}(${type} ${name}) { this.${name} = ${name}; }`);
        }
        return properties.join('\n');
    }
    capitalizeFirstLetter(input) {
        if (input.length === 0) {
            return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    generateFileContent(fName, argumentsJSON) {
        const propertiesSection = this.generatePropertiesSection(argumentsJSON);
        const propertiesSectionSet = this.generatePropertiesSectionSet(argumentsJSON);
        return `using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
${indent}public class ${fName}Entity : BaseEntity
${indent}{
${propertiesSection}
${propertiesSectionSet}
${indent}}
}`;
    }
}
exports.default = new GenEntityService();
