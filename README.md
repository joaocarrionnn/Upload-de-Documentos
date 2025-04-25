# 🧠 Assistente de Redação com IA

Este é um sistema web onde o usuário faz upload de um documento `.docx` contendo sua redação, e o site exibe a redação formatada **junto com um feedback automático gerado por inteligência artificial (IA)**, usando a API Gemini da Google.

---

## 📸 Exemplo de fluxo:

1. O usuário faz upload de um `.docx`.
2. O conteúdo da redação aparece abaixo do formulário.
3. A IA avalia o texto e exibe:
   - Pontos fortes
   - Erros de gramática, ortografia e coesão
   - Sugestões de melhoria
   - Nota estimada (opcional)

---

## 🚀 Tecnologias usadas

- Node.js + Express
- EJS (template engine)
- Bootstrap 5 (estilização e responsividade)
- Multer (upload de arquivos)
- Mammoth.js (leitura de `.docx`)
- Google Gemini API (IA para correção de redações)

---

## 📂 Estrutura do Projeto

```
assistente-redacao/
│
├── app.js                 # Servidor Express
├── IA.js                  # Lógica de comunicação com a IA (Gemini)
├── .env                   # Chave da API Gemini
├── /uploads               # Arquivos enviados pelos usuários
├── /public                # CSS, imagens e frontend
│   └── css/style.css
├── /mvc/views             # Templates EJS
│   └── index.ejs
└── README.md
```

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/assistente-redacao.git
cd assistente-redacao
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure sua chave da API Gemini

- Acesse: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
- Gere uma chave da API.
- Crie um arquivo `.env` na raiz do projeto com:

```env
GEMINI_API_KEY=sua_chave_aqui
```

### 4. Execute o servidor

```bash
node app.js
```

### 5. Acesse no navegador

```
http://localhost:8810
```

---

## ✨ Funcionalidades

- Upload seguro de arquivos `.docx`
- Visualização do texto com formatação preservada
- Correção de redação com IA especializada em Língua Portuguesa
- Feedback claro, objetivo e direto ao ponto
- Interface simples, responsiva e elegante com Bootstrap

---

## 📌 Observações

- Apenas arquivos `.docx` são suportados para leitura formatada.
- A IA foi configurada para retornar respostas de no máximo 200 palavras, claras e diretas.
- É possível customizar o modelo, o prompt e a resposta facilmente pelo `IA.js`.