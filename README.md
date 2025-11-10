# 🧪 Banco API Tests

## 📘 Descrição do Projeto

O **Banco API Tests** é um projeto de **automação de testes de API REST** desenvolvido em **JavaScript**, com o objetivo de validar as funcionalidades da [Banco API](https://github.com/ViniciusFLeal/banco-api).  
Ele utiliza um conjunto de bibliotecas modernas e flexíveis para estruturar, executar e gerar relatórios detalhados dos testes automatizados.

---

## 🎯 Objetivo

Validação dos endpoints da aplicação Banco API por meio de testes automatizados de integração e comportamento.

---

## ⚙️ Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de Asserções:** [Chai](https://www.chaijs.com/)
- **Cliente HTTP para Testes:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios de Testes:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciador de Pacotes:** npm

Todas as dependências estão listadas no arquivo `package.json`.

---

## 🗂️ Estrutura de Diretórios

A estrutura do projeto segue o seguinte padrão:

```
banco-api-tests/
├── test/
│   ├── clientes.test.js
│   ├── transacoes.test.js
│   └── ...
├── mochawesome-report/      # Gerado automaticamente após os testes
├── .env                     # Arquivo de configuração local (não versionado)
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔐 Arquivo `.env`

O arquivo `.env` deve ser criado manualmente na raiz do projeto.  
Ele contém as variáveis de ambiente necessárias para configurar a URL base da API a ser testada.

### Exemplo:

```env
BASE_URL=http://localhost:3000
```

> ⚠️ Certifique-se de que o servidor da API esteja em execução antes de executar os testes.

---

## ▶️ Execução dos Testes

### 1. Instalar as dependências

```bash
npm install
```

### 2. Executar os testes

```bash
npm test
```

Por padrão, o Mocha executará todos os testes contidos no diretório `test/`.

---

## 📊 Geração de Relatórios

Após a execução dos testes, o **Mochawesome** gerará automaticamente um relatório em formato **HTML** e **JSON** dentro do diretório `mochawesome-report/`.

### Para visualizar o relatório:

1. Após a execução dos testes, acesse:
   ```
   ./mochawesome-report/mochawesome.html
   ```
2. Abra o arquivo em seu navegador para visualizar o relatório completo com:
   - Resultados de sucesso e falha  
   - Duração dos testes  
   - Estatísticas gerais  

---

## 🔗 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)

---

## 💡 Observações

- O arquivo `.env` **não é versionado** por segurança.
- Caso a API esteja hospedada remotamente, altere o valor de `BASE_URL` para o endpoint desejado.
- Recomenda-se limpar o diretório `mochawesome-report/` antes de cada execução para evitar relatórios acumulados.

---

## 👨‍💻 Autor

**Vinicius Leal**  
📦 [Repositório da API Principal (Banco API)](https://github.com/ViniciusFLeal/banco-api)  
📦 [Repositório dos Testes (Banco API Tests)](https://github.com/ViniciusFLeal/banco-api-tests)
