const server = require("./app")
const { conn } = require('./db/connection');

const PORT = 3001;

conn.sync({ force: true }).then(() => {
   console.log('Database connected');
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
}).catch(error => console.log(error));



// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });