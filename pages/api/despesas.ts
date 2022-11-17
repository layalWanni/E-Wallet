let init_despesas = [
    {
        id: "0eb9d0c6-4012-4dbb-86b9-8191355bb051",
        valor: 50.56,
        descricao: "Mercadinho da Esquina",
        moeda: "REAL (R$)",
        metodo: "Cartão",
        tag: "compras"
    },
    {
        id: "abe722b9-2c32-45b1-925a-446f43a6cb9b",
        valor: 556.56,
        descricao: "Roda do Carro",
        moeda: "REAL (R$)",
        metodo: "Cartão",
        tag: "Carro"
    },
    {
        id: "ebf21feb-c588-4fe3-9441-44d8911d48b5",
        valor: 230.89,
        descricao: "Panela Polishop",
        moeda: "REAL (R$)",
        metodo: "Cartão",
        tag: "Casa"
    },
    {
        id: "18b7598e-04c1-4696-8852-2332be8c136c",
        valor: 908.56,
        descricao: "Mais coisa pro Carro heheheh",
        moeda: "REAL (R$)",
        metodo: "Cartão",
        tag: "Carro"
    },
];

// # FunctionsAPI
function findAllDespesas() {
    return init_despesas;
}

export { findAllDespesas };