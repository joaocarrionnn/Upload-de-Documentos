
#  Sistema de Upload de Documentos

Este é um projeto simples para upload de arquivos `.doc` e `.docx` com armazenamento local e registro no banco de dados via MySQL (HeidiSQL). Ele utiliza Node.js, Express, Multer, Bootstrap e EJS para o frontend.

---

## Tecnologias Utilizadas

- Node.js
- Express
- EJS
- Multer
- Bootstrap 5
- MySQL (via HeidiSQL)

---

## Funcionalidades

 Upload de arquivos `.doc` e `.docx`  
 Interface moderna com Bootstrap  
 Armazenamento local dos arquivos  
 Registro no banco de dados (nome + caminho + data)  
 Código simples e direto

---

## Estrutura de Pastas

```
 seu-projeto/
├── app.js
├── uploads/             # Onde os arquivos são salvos
├── mvc/
│   └── views/
│       └── index.ejs    # Página principal
├── public/
│   └── img/
│       └── documento.png # Ícone para os cards (opcional)
│   └── css/             # Se quiser usar CSS extra
└── README.md
```

---

## Como Rodar

### 1. Instale as dependências:

```bash
npm install express multer ejs mysql2
```

> Se quiser, adicione o `nodemon` para facilitar:
```bash
npm install -D nodemon
```

---

### 2. Crie o banco de dados no HeidiSQL (MySQL):

```sql
CREATE DATABASE uploads_db;

USE uploads_db;

CREATE TABLE documentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_arquivo VARCHAR(255) NOT NULL,
  caminho VARCHAR(255) NOT NULL,
  data_upload TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 3. Configure o banco no `app.js`:

```js
const db = mysql.createConnection({
  host: "localhost",
  user: "seu_usuario",
  password: "sua_senha",
  database: "uploads_db"
});
```

---

### 4. Execute o servidor:

```bash
node app.js
```

Ou, se estiver usando `nodemon`:

```bash
npx nodemon app.js
```

---

## Exemplo de Card com Imagem (Bootstrap)

```html
<div class="card" style="width: 18rem;">
  <img src="/img/documento.png" class="card-img-top" alt="Documento">
  <div class="card-body">
    <h5 class="card-title">Arquivo.docx</h5>
    <p class="card-text">Enviado em: 23/04/2025</p>
    <a href="#" class="btn btn-primary">Baixar</a>
  </div>
</div>
```

---


