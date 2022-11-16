import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '../../../components/sidebar/sidebar';
import Header from '../../../components/head/head';
import Footer from '../../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import router from 'next/router';


export default function CadastrarDespesas() {
    return (
        <>
            <div className='contain col-md-12'>
                <Sidebar />
                <div className="col-md-7">
                    <Header />
                    <div className="content col-md-12">
                        <div className='titulo-despesas'>
                            <h3>Despesas Cadastro</h3>
                            <div className='botoes-despesas'>
                                <button className='btn btn-success btn-cadastrar' style={{ marginRight: "30px" }}><FontAwesomeIcon icon={faPlus} /> Salvar</button>
                                <button className='btn btn-warning btn-voltar' onClick={() => router.push('/despesas')} style={{ width: "100px" }}>Voltar</button>

                            </div>

                            <div className='col-md-12' style={{ display: "flex", marginTop: "10%" }}>
                                <div className='col-md-6'>
                                    <label>Descrição</label>
                                    <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição"
                                        aria-describedby="basic-addon1" style={{ width: "80%" }} />
                                </div>
                                <div className='col-md-6'>
                                    <label>Valor</label>
                                    <input type="text" className="form-control" placeholder="Valor" aria-label="valor"
                                        aria-describedby="basic-addon1" style={{ width: "80%" }} />
                                </div>
                            </div>
                            <div className='selects' style={{ display: "flex", marginTop: "5%" }}>
                                <div className='col-md-4'>
                                    <select className="form-control form-control-sm" style={{ width: "80%" }}>
                                        <option>Seleccione o Tag</option>
                                    </select>
                                </div>
                                <div className='col-md-4'>
                                    <select className="form-control form-control-sm" style={{ width: "80%" }}>
                                        <option>Seleccione a Moeda</option>
                                    </select>
                                </div>
                                <div className='col-md-4'>
                                    <select className="form-control form-control-sm" style={{ width: "80%" }}>
                                        <option>Seleccione o Pagamento</option>
                                    </select>
                                </div>
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