import http from "http"
import "dotenv/config.js"
import app  from './src/app.js'

const PORT = 3000

const route = {
    "/": "Curso de Node.js {Pedro}",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
}

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-type": "text/plain"});
//     res.end(route[req.url]);
// });

app.listen(PORT, () => {
    console.log("servidor escutando!");
});