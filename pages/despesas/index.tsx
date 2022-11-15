import Button from "../../src/components/button";

export default function ListaDespesas() {
    return (
        <div className="despesas-container">
            <div className="side-bar">
                <div className="header">
                    Header
                </div>
                <div className="lista">

                    <div className="titulo" style={{flexDirection:"row"}}>
                        <h1 style={{ fontFamily: "Montserrat", fontSize: 22, fontWeight: "bold" }} >Despesas</h1>

                        <Button border="none"
                            color="#191970"
                            height="44px"
                            radius="4px"
                            width="199px">
                            <text style={{ color: "white" }}>Cadastrar Despesa</text>
                        </Button>

                    </div>

                    <div className="table-grid">
                        <table>
                            <tr>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Moeda</th>
                                <th>Metodo de Pagamento</th>
                                <th>Tag</th>
                            </tr>
                            <tr>
                                <td>Aluguel</td>
                                <td>2000</td>
                                <td>Real</td>
                                <td>Cartão de Credito</td>
                                <td>Vida</td>
                            </tr>
                        </table>
                    </div>


                </div>
            </div>
        </div>

    )
}