const express = require("express");
const { randomUUID } = require("crypto");
const fs = require("fs");

const server = express();

server.use(express.json());

let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    products = JSON.parse(data);
  }
});

/**
 * POST => INSERIR UM DADO
 * GET => BUSCAR UM/MAIS DADOS
 * PUT => ALTERAR UM DADO
 * DELETE =: REMOVER UM DADO
 */

/**
 * Body => Sempre que eu quiser enviar dados para a minha aplicação
 * params => /product/8456468456465456 isso é um parametro de rota!!
 * Query => /product?id=5656456456&value575757
 */

server.post("/products", (req, res) => {
  //nome e preço => name e price

  const { name, price } = req.body;

  const product = { name, price, id: randomUUID() };

  products.push(product);

  productFile();

  return res.json(product);
});

server.get("/products", (req, res) => {
  return res.json(products);
});

server.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  return res.json(product);
});

server.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  productFile();

  return res.json({ message: "Produto Alterado com sucesso" });
});

server.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product.id === id);
  products.splice(productIndex, 1);

  productFile();

  return res.json({ message: "Produto removido com sucesso" });
});

function productFile() {
  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Produto inserido");
    }
  });
}

server.listen(4001, () => console.log("Servidor está rodando a rota 4001"));
