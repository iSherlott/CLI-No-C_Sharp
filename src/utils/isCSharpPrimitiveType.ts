export function isCSharpPrimitiveType(type: any) {
    const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte'];
    return csharpPrimitiveTypes.includes(type);
}