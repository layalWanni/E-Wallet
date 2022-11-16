import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/head/head';
import Footer from '../../components/footer/footer';
import router from 'next/router';

export default function Poupanca() {
    return (
        <>
            <div className='contain col-md-12'>
                <Sidebar />
                <div className="col-md-7">
                    <Header />
                    <div className="content col-md-12">
                        <div className='titulo'>
                            <h3>Poupança</h3>
                            <div className='botoes'>
                                <button className='btn btn-secondary btn-voltar' onClick={() => router.push('/dashboard')}>Voltar</button>
                                <button className='btn btn-secondary btn-salvar'>Salvar</button>
                            </div>
                            <div className='poupanca-box'>
                                <h5 className='total-poupanca'>Valor Total: 100,00 R$</h5>

                                <div className="input-group mb-3 input-poupanca">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="ex: 35.00 R$" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                    </div>
                                </div>

                                <button className='btn btn-success btn-adicionar'>Adicionar</button>
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