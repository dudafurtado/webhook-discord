# Webhook Client Discord

Para conhecer melhor sobre o conceito de webhook e aproveitar o servidor pessoal do discord, resolvi seguir o tutorial [https://www.youtube.com/watch?v=hcWoDfsGpq8&ab_channel=CedrickAlegroso] para enviar mensagens ao servidor de maneira simples trabalhando com a biblioteca discord.js.

## Tecnologias

*Antes de instalar qualquer pacote no projeto é preciso iniciar o npm com npm init -y*

### Biblioteca discord.js

Utilizada para interagir facilmente com a API do Discord e consequentemente trabalhar com os Bots.

1. Instalação do pacote no projeto com `npm install discord.js`
2. Criação de uma nova instância do discord, a partir da constante que extrai o conteúdo da biblioteca com `new Discord`
3. Essa instância possui o método **WebhookClient** utilizado para enviar credenciais de validação
4. Para enviar uma mensagem ao servidor utilizamos o método `.send`

Para entender as 2 utlizações do contrutor do WebhookClient é preciso ler a documentação do discord.js [https://discordjs.guide/popular-topics/webhooks.html#fetching-a-single-webhook]

### Discord credenciais

É preciso extrair do canal do servidor as credenciais do webhook. As principais para essa situação são: id do chat e token do servidor. Os 2 estarão disponíveis na URL do webhook informadas pelo discord.

### Biblioteca dotenv

Utilizada para proteger as credenciais do servidor do discord.

1. Instalação do pacote com `npm install dotenv`
2. Configuração para uso `require('dotenv').config()`
3. Usando a variável de ambiente com `process.env.NOME_DA_VARIAVEL`


### Biblioteca readlineSync

Utilizada para conversar com o usuário pelo console / terminal.

1. Instalação do pacote com `npm install readline-sync`
2. Usando o método `.question` do pacote para gerar no terminal uma pergunta que consequentemente espera uma resposta

#### Referências
<https://www.npmjs.com/package/readline-sync>
<https://discordjs.guide/#before-you-begin>
<https://www.npmjs.com/package/dotenv>

**by Duda Furtado**
