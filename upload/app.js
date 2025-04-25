const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const mammoth = require("mammoth");
require("dotenv").config();
const {executar} = require("./IA");

const app = express();

// Verificar se a pasta uploads existe
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configuração do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "mvc/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.render("index", { conteudoHtml: null, feedbackIA: null });
});

app.post("/", upload.single("documento"), async (req, res) => {
  if (!req.file) {
    return res.send("Nenhum arquivo enviado.");
  }

  const caminho = path.join(__dirname, "uploads", req.file.originalname);
  const ext = path.extname(req.file.originalname).toLowerCase();

  if (ext === ".docx") {
    fs.readFile(caminho, async (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return res.send("Erro ao ler o arquivo.");
      }

      try {
        const result = await mammoth.convertToHtml({ buffer: data });
        const textoPuro = await mammoth.extractRawText({ buffer: data });
        const html = result.value;

        // Chamada da IA
        const feedbackIA = await executar(textoPuro.value || textoPuro);

        res.render("index", {
          conteudoHtml: html,
          feedbackIA: feedbackIA
        });
      } catch (error) {
        console.error("Erro ao processar o arquivo:", error);
        res.send("Erro ao processar a redação.");
      }
    });
  } else {
    res.render("index", {
      conteudoHtml: "<p>Formato .doc não suportado para visualização formatada.</p>",
      feedbackIA: null
    });
  }
});

app.listen(8810, (err) => {
  if (err) {
    console.error("Erro ao iniciar o servidor:", err);
    return;
  }
  console.log("Servidor rodando na porta 8810");
});
