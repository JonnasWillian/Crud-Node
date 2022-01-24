// Configuração de dados para conexão com o banco de dados
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'crud-node',
  define: {
    timestamp: true,
    underscored: true,
  }
}