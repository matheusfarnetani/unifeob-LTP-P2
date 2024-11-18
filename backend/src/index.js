// index.js
const express = require("express");
const app = express();
const cors = require('cors');

const ProfessorRoutes = require("./routes/ProfessorRoutes");
const AulaRoutes = require("./routes/AulaRoutes");
const AlunoRoutes = require("./routes/AlunoRoutes");
const MatriculaRoutes = require("./routes/MatriculaRoutes");

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));


app.use("/professores", ProfessorRoutes);
app.use("/aulas", AulaRoutes);
app.use("/alunos", AlunoRoutes);
app.use("/matriculas", MatriculaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
