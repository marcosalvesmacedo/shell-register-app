# Shell da aplicação de cadastro de usuários

Esse projeto foi desenvolvido utilizando angular 15 + a biblioteca de MFE Module Federation. Esse projeto é o host (shell) de uma aplicação de cadastro de usuários.

## Como rodar esse projeto

Primeiramente faça a instalação do node v20.18.2 e tenha o vscode instalado na sua maquina.

Para rodar esse projeto é necessário que também estejam disponiveis em um repositório local na sua maquina os projetos mfe-register-app e mfe-success-app. Como de costume utilizar uma pasta chamada workspace-frontend ou com outro nome de sua preferência. 

No projeto shell-register-app, abra uma janela do cmd e navegue até a raiz do projeto e de o comando npm install.
Após isso, na mesma janela do cmd de o comando npm run start:jsonserver. Esse comando irá rodar o projeto shel-register-app + o json-server na porta 4200.
Abra uma janela nova do cmd e navegue até a raiz do projeto mfe-registe-app e execute o comando start:app. Isso irá executar o mfe-register-app na porta 4201.
Abra outra janela do cmd e navegue até a raiz do projeto mfe-success-app e execute o comando start:app. Isso irá executar o mfe-succes-app na porta 4202.

Para acessar abra o navegador de sua preferência e digite http://localhost:4200/. Isso te levará para a tela de boas vindas.

## Rodar testes unitários

Para rodar os testes unitários você pode executar o comando npm run test. Após executar todos os testes, você pode acessar um relatório de cobertura em html no navegador, que está dentro da pasta raiz do seu projeto através do caminho shell-register-app\coverage\shell-register-app\index.html

## Arquitetura utilizada

Esse projeto utiliza uma arquitetura de MFE (Micro Frontend) usando a biblioteca Module Federation. Essa arquitetura permite que tenhamos projetos separados rodando como parte de um sistema unico.
Alguns pontos são levados em consideração ao utilizar esse tipo de arquitetura. 
Podemos citar:
independência de times de desenvolvimento ao criar um novo projeto que fará parte do projeto principal;
Melhoria da performance da aplicação como um todo;

