import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/head/head';
import Footer from '../../components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router'

export default function Dashboard() {
    const router = useRouter()
    return (
        <>
            <div className='contain col-md-12'>
                <Sidebar />
                <div className="col-md-7">
                    <Header />
                    <div className="content col-md-12">
                        <div className='titulo-despesas'>
                            <h3>Dashboard</h3>
                            <div className='botoes-despesas'>
                                <button className='btn btn-secondary btn-cadastrar' onClick={() => router.push('/despesas')}><FontAwesomeIcon icon={faPlus} /> Despesas</button>
                            </div>

                            <div className='' style={{ height: "270px" }}>
                                <div className="card-container col-md-12">
                                    <div className="diviser"></div>
                                    <div className="head-bar-card col-md-3" style={{ background: "#d1f2ee" }}>
                                        Visão geral
                                        <h4 style={{ color: "black;" }}>Dashboard</h4>
                                    </div>
                                    <div className="head-bar-card col-md-3" style={{ background: "#c3e4e0" }}>
                                        Despesas
                                        <h4 style={{ color: "orange;" }}>total</h4>
                                    </div>
                                    <div className="head-bar-card col-md-3" style={{ background: "#d1f2ee" }}>
                                        Poupança
                                        <h4 style={{ color: "rgb(8, 108, 208);" }}>1,156</h4>

                                    </div>
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