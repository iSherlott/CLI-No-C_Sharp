"use strict";
const fs = require('fs');
const path = require('path');
// Verificar se o nvm está em uso
const npmGlobalPath = process.env.NVM_SYMLINK || process.env.APPDATA + '\\npm';
// Caminho completo para o arquivo index.js da sua biblioteca
const nodeCommand = path.join(__dirname, 'index.js');
// Cria o diretório se não existir
if (!fs.existsSync(npmGlobalPath)) {
    fs.mkdirSync(npmGlobalPath, { recursive: true });
}
// Cria o conteúdo do script 'nc'
const scriptContent = `@echo off \n set "NODE_COMMAND=${nodeCommand}" \n node "%NODE_COMMAND%" %*`;
// Caminho completo para o script 'nc.bat' no diretório global do npm
const commandPath = path.join(npmGlobalPath, 'nc.bat');
// Escreve o conteúdo do script no arquivo 'nc.bat'
fs.writeFileSync(commandPath, scriptContent, { mode: 0o755 });
