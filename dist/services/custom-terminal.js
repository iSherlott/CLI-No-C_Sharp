"use strict";
const readline = require('readline');
const fs = require('fs');
const path = require('path');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Custom-Terminal> ',
});
rl.prompt();
rl.on('line', (line) => {
    const command = line.trim();
    if (command === 'exit') {
        rl.close();
    }
    else if (command === 'nc') {
        // Obtenha o caminho do projeto a partir dos argumentos de linha de comando
        const projectPath = process.argv[2];
        if (!projectPath) {
            console.error('Erro: Forneça o caminho do projeto ao executar o script.');
            rl.prompt();
            return;
        }
        // Obtenha o caminho absoluto do arquivo dist/index.js
        const indexPath = path.resolve(projectPath, 'dist', 'index.js');
        // Adicione a configuração do comando nc ao arquivo de perfil do usuário
        const profileFilePath = path.join(process.env.HOME, '.bashrc'); // para Linux/Mac
        // const profileFilePath = path.join(process.env.USERPROFILE!, '.bashrc'); // para Windows
        const ncAlias = `alias nc=\"node '${indexPath}'\"`;
        // Adiciona o alias apenas se não existir no arquivo
        if (!fs.readFileSync(profileFilePath, 'utf8').includes(ncAlias)) {
            fs.appendFileSync(profileFilePath, `${ncAlias}\n`);
            console.log('Alias "nc" registrado com sucesso no arquivo de perfil.');
        }
        else {
            console.log('Alias "nc" já existe no arquivo de perfil.');
        }
    }
    else {
        console.log(`Comando não reconhecido: ${command}`);
    }
    rl.prompt();
}).on('close', () => {
    console.log('Saindo do terminal personalizado.');
    process.exit(0);
});
