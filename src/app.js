const express = require("express");
const sequelize = require("./database");
require('./models')

const app = express();
app.use(express.json());

app.use('./usuarios', require('./rotas/usuarios'));
app.use('./despesas', require('./rotas/despesas'));
app.use('./agendamentos', require('./rotas/agendamentos'));


sequelize.sync()
.then(() => { app.listen(3000, () => console.log|('Servidor aberto em https://localhost:3000'))}) 
.catch(err => console.error('Erro ao iniciar:', err));