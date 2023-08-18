# SuaSede - Serviço Completo de Retaguarda

Bem-vindo ao repositório do projeto SuaSede! Este é um serviço completo de retaguarda para o seu negócio, oferecendo recursos como Escritório Virtual, Salas de Reunião, Contabilidade Digital e muito mais. Abaixo estão as informações sobre como configurar e implantar o projeto. Por favor, leia com atenção antes de continuar.

## Contato

Para descobrir mais sobre os serviços oferecidos pela SuaSede, [entre em contato conosco](mailto:contato@sua-sede.com).

## Requisitos

Antes de começar, certifique-se de ter o ambiente de desenvolvimento configurado com o seguinte:

- Vue.js: [Guia de Instalação](https://vuejs.org/v2/guide/installation.html)
- Node.js e npm: [Download e Instalação](https://nodejs.org/)

## Instalação

Siga as etapas abaixo para configurar o projeto em sua máquina:

### 1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/renantheodoro/SuaSede.git
cd suasede
```
   
Instale as dependências do projeto usando npm:

```bash
npm install
```

### 2. Configuração do Firebase:

Antes de fazer alterações e implantar o projeto, é necessário configurar o Firebase. Certifique-se de ter o **Firebase CLI** instalado e configurado corretamente. Após isso, execute o seguinte comando para fazer o login:

```bash
firebase login
```

E então, adicione o projeto Firebase ao seu projeto SuaSede:

```bash
firebase use --add
```

## Alterações e Implantação

Se você deseja fazer alterações no site, tenha em mente que é necessário ter conhecimento em desenvolvimento web e em linha de comando. Para fazer alterações e implantar o projeto, siga as etapas abaixo:

### 1. Faça as alterações desejadas no código-fonte do projeto.

### 2. Use o seguinte comando para implantar o projeto no Firebase Hosting:

```bash
npm run deploy
```

## Autor

Este projeto foi desenvolvido por [Renan Theodoro](https://renantheodoro.com.br/). Confira mais projetos em seu [perfil do GitHub](https://github.com/renantheodoro/).

Obrigado por escolher o SuaSede! Se houver alguma dúvida ou você precisar de assistência, entre em contato conosco.
