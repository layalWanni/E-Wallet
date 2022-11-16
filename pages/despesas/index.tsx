import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/head/head';
import Footer from '../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'


export default function Despesas() {
    const router = useRouter()
    return (
        <>
            <div className='contain col-md-12'>
                <Sidebar />
                <div className="col-md-7">
                    <Header />
                    <div className="content col-md-12">
                        <div className='titulo-despesas'>
                            <h3>Despesas</h3>
                            <div className='botoes-despesas'>
                                <button className='btn btn-secondary btn-cadastrar'
                                    onClick={() => router.push('/despesas/criar')}
                                ><FontAwesomeIcon icon={faPlus} /> Cadastrar Despesa</button>
                            </div>

                            <div className=''>
                                <table className="table table-striped tabela" >
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Cartão</th>
                                            <th scope="col">Moeda</th>
                                            <th scope="col">Balanço</th>
                                            <th scope="col">Data</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>
                                            <td>@twitter</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}