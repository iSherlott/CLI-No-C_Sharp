# CLI-Design_CSharp

## Descrição
Este projeto é uma CLI (Command Line Interface) desenvolvida em TypeScript para criar e estruturar projetos C# seguindo uma arquitetura em camadas comum em aplicativos C#. A estrutura do projeto C# inclui camadas para API, Domínio e Infraestrutura, organizando claramente as responsabilidades para facilitar a manutenção e escalabilidade do código.

## Dependências Principais
commander: Biblioteca para criar interfaces de linha de comando.
mustache: Para carregar e interpolar os arquivos template

## Pré-requisitos
Certifique-se de ter o Node.js instalado para executar a CLI.

## Instalação
Clone o repositório para o seu ambiente local e execute o seguinte comando para instalar as dependências:

```
npm install
```

## Uso
A CLI oferece os seguintes comandos:

### `nc help`
Exibe informações de ajuda sobre o uso da CLI.

### `nc g` ou `nc g help`
Exibe informações de ajuda sobre os comandos de geração.

### `nc new <nome do projeto>`
Cria um novo projeto C# estruturado seguindo a arquitetura em camadas.

### `nc g entity` ou `nc g e`
```nc g entity <nameEntity> [fields...]```

Este comando gera uma entidade com o nome especificado e os campos fornecidos. Os campos devem ser fornecidos no formato name:type.

#### Opções
--postgres <postgreSQLFields>: Especifica campos adicionais para serem usados em bases de dados PostgreSQL. Os campos devem ser fornecidos no formato table:schema.

#### Exemplos de Uso
```
# Criar uma entidade chamada "User" com os campos "name:string" e "age:int"
nc g e User name:string age:int
```

```
# Criar uma entidade chamada "Product" com os campos "name:string" e "price:decimal" e campos PostgreSQL adicionais
nc g e Product name:string price:decimal --postgres products:public
```

### `nc g command` ou `nc g f`
Commando ainda em manutenção!!!

### `nc g repository` ou `nc g r`
Commando ainda em manutenção!!!

### `nc g handler` ou `nc g h`
Commando ainda em manutenção!!!

### `nc g controler` ou `nc g c`
Commando ainda em manutenção!!!

### Notas
Este comando está atualmente em manutenção, e novos recursos e opções serão adicionados em versões futuras. Fique atento para atualizações.

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

## Licença
Este projeto é licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter detalhes.

Observação: Certifique-se de ajustar as versões das dependências e outras informações conforme necessário no arquivo README.