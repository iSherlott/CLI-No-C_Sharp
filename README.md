# CLI-Design_CSharp

## Descrição
Este projeto é uma CLI (Command Line Interface) desenvolvida em TypeScript para criar e estruturar projetos C# seguindo uma arquitetura em camadas comum em aplicativos C#. A estrutura do projeto C# inclui camadas para API, Domínio e Infraestrutura, organizando claramente as responsabilidades para facilitar a manutenção e escalabilidade do código.

## Dependências Principais
commander: Biblioteca para criar interfaces de linha de comando.

## Pré-requisitos
Certifique-se de ter o Node.js instalado para executar a CLI.

## Instalação
Clone o repositório para o seu ambiente local e execute o seguinte comando para instalar as dependências:

```
npm install
```

## Uso
A CLI oferece os seguintes comandos:

###`nc help`
Exibe informações de ajuda sobre o uso da CLI.
```
npm run start help
```

`nc new <nome do projeto>`
Cria um novo projeto C# estruturado seguindo a arquitetura em camadas.

```
npm run start new <nome do projeto>
```

## Estrutura do Projeto C#
O projeto gerado seguirá a seguinte estrutura:

- API:

  Configurations: Classes de configuração relacionadas à API.
  Controllers: Controladores responsáveis por receber solicitações HTTP.
  Properties: Arquivos relacionados às propriedades do projeto.

- Domain:

  Commands: Definição de comandos que representam ações na aplicação.
  Entities: Modelos de dados (entidades) representando objetos de domínio.
  Handlers: Classes de manipulação que processam comandos ou eventos.
  Repositories: Interfaces e implementações de repositórios para interação com o armazenamento de dados.
  Validation: Classes de validação que garantem integridade dos dados e aplicam regras de negócios.

- Infraestrutura:

  Configuration: Classes de configuração relacionadas a serviços de infraestrutura.
  Data: Implementação do acesso ao banco de dados, mapeamento de entidades e operações de persistência.

- Ioc:

  Program.cs: Ponto de entrada da aplicação.
  appSettings.cs: Classes representando configurações da aplicação em formato de código.
  appSettings.Development.json: Configurações específicas do ambiente de desenvolvimento.

## Scripts
npm run build: Compila o código TypeScript para JavaScript.
npm start: Inicia a CLI.

#Licença
Este projeto é licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter detalhes.

Observação: Certifique-se de ajustar as versões das dependências e outras informações conforme necessário no arquivo README.