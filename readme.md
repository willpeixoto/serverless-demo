
# DEMO SERVERLESS-FRAMEWORK

## vamos criar uma base de projeto usando serverless-framework com node-js e Typescript

## vamos precisar ter uma key da aws para fazer o deploy do projeto

## Instalar o Node.js v12. e NPM v5.5+

## 1- instalar serverless framework globalmente

    npm i -g serverless-framework

## 2-instalar o serverless-offline como dev para não subirn o seu deploy =D

    npm install serverless-offline --save-dev

Vou utilizar o seguinte grupo de tecnologias/serviços para construir nossa super master blaster DEMO:
==> Lambda & API Gateway para a nossa API
==> DynamoDB para o nosso banco de dados
==> SQS para enviarmos nossas mensagens
==> S3 para a hospedagem da nossa aplicação

### para nossa demo vamos simular as seguintes situações

- vamos criar um end-point que recebe um post, este body é publicado em uma fila.

- para esta fila teremos uma lambda como "consumidor da fila"

- lambda trigger do sqs essa trigger é inserida no dynamodb.

- no banco de dados a nivel de conhecimento vamos utilizar o DynamoDb

# não iremos criar o dynamoDb aqui para isso você deve entrar no console da aws e criar a tabela

## próximos passos demonstrar o uso do dynamoDB com trigger em uma lambda

- lambda com trigger do dynamo publicando em um tópico sobre persistência a persistência.

- deploy do nosso projeto na aws

# TODO

- plugar em um tópico

- criar upload de arquivo via s3 - streaming

- route53 custom domain

- criar exemplo com private end-points

- criar exemplo com vpc

- refatorar serverless.yml separar em arquivos os resources e functions

- remover hard-codes para variaveis de ambiente

- criar pipeline para deploy

- acrescentar autenticação com o cognito

- fixar bucket para deploy

- criar apresentação e desenho de solução completa

- criar testes unitários

- colocar validação com sonar qube

- colocar resiliência onError nas funcoes

- criar exemplo com uso de SSM para variaveis na aws

- colocar x-ray para tracing

- criar conta no dashbird para monitoria

- testar serverless-framework para monitoria
