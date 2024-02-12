"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDirectory = exports.processFile = exports.readFile = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
function readFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return {
        path: filePath,
        content: fileContent
    };
}
exports.readFile = readFile;
function processFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(path.join(__dirname, 'template'), filePath);
    const target = relativePath.replace(/\\/g, '/');
    const fileName = relativePath.replace(/\\/g, '/').split("/").at(-1);
    return {
        path: filePath,
        fileName: fileName,
        target: target,
        content: fileContent
    };
}
exports.processFile = processFile;
function processDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    const results = [];
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            results.push(...processDirectory(filePath));
        }
        else {
            results.push(processFile(filePath));
        }
    });
    return results;
}
exports.processDirectory = processDirectory;
