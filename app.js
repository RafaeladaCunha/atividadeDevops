var express = require ('express'); 

var app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send('Hello World!');
});


app.listen(port, () => {
  console.log(` O servidor esta a rodar na porta http://localhost:${port}`);
});

