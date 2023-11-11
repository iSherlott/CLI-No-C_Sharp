"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCSharpPrimitiveType = void 0;
function isCSharpPrimitiveType(type) {
    const csharpPrimitiveTypes = ['guid', 'string', 'int', 'double', 'bool', 'float', 'char', 'decimal', 'long', 'short', 'byte'];
    return csharpPrimitiveTypes.includes(type);
}
exports.isCSharpPrimitiveType = isCSharpPrimitiveType;
