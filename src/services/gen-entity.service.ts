const indent = '    ';
class GenEntityService {
    private generatePropertiesSection(argumentsJSON: Record<string, string>): string {
        const properties = [];
        for (const [name, type] of Object.entries(argumentsJSON)) {
            properties.push(`${indent}${indent}public ${type} ${name} { get; set; }`);
        }

        return properties.join('\n');
    }

    private generatePropertiesSectionSetAndGet(argumentsJSON: Record<string, string>): string {
        const properties = [];
        for (const [name, type] of Object.entries(argumentsJSON)) {
            properties.push(`${indent}${indent}public void set${this.capitalizeFirstLetter(name)}(${type} ${name}) { this.${name} = ${name}; }`);
        }

        return properties.join('\n');
    }

    private capitalizeFirstLetter(input: string): string {
        if (input.length === 0) {
            return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    generateFileContent(fName: string, argumentsJSON: Record<string, string>): string {
        const propertiesSection = this.generatePropertiesSection(argumentsJSON);

        return `using System.ComponentModel.DataAnnotations.Schema;

namespace mf.domain.Entities
{
${indent}public class ${fName}Entity : BaseEntity
${indent}{
${propertiesSection}
${indent}${indent}public void setUsername(string username) { this.username = username; }
${indent}${indent}public void setTag(string tag) { this.tag = tag; }
${indent}${indent}public void setWallet(int wallet) { this.wallet = wallet; }
${indent}${indent}public void setActive(bool active) { this.active = active; }
${indent}}
}`;
    }
}

export default new GenEntityService();
