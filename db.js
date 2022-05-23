const { Sequelize } = require('sequelize');
const pool = new Sequelize('thuchanh', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres'
});
// pool.authenticate().then(()=>{
//   console.log('thanh cong');
// })
module.exports = pool;