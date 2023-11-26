import express from "express";
import conectaDataBase from "./config/dbconect.js";
import routes from "./routes/index.js";


const conexao = await conectaDataBase();

conexao.on("error", (erro => {
    console.error("error conexao", erro);
}));

conexao.once("open", () =>{
    console.log("conexão com o banco realizada com sucesso!");
})

const app = express();

routes(app);



// app.delete("/livros/:id", (req, res) =>{
//     const index = buscalivro(req.params.id);
//     livros.splice(index, 1);
//     res.status(200).send("livro deletado com sucesso!");
// });


export default app;