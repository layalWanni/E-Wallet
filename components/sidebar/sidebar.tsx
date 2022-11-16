import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faSignOut, faSliders, faUsd } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
    return (
        <div className="sidebar col-md-3">
            <b>E-Wallet</b>
            <div className="sidebar-menu">
                <div>
                    <img src={"./img/layal-e-wallet.jpg"} alt="Logo" className='perfil' />
                    <b style={{ marginLeft: "15%" }}>Layal Al Wanni</b>
                </div>
                <div style={{ marginTop: "15%" }}>
                    <div className="selected">
                        <p className='menu-itens'>
                            <FontAwesomeIcon icon={faHouse} />
                            Dashboard
                        </p>
                    </div>
                    <div>
                        <i className="fa fa-usd"></i>
                        <p className='menu-itens'>
                            <FontAwesomeIcon icon={faUsd} />
                            Despesas
                        </p>
                    </div>
                    <div>
                        <i className="fa fa-money-bill"></i>
                        <p className='menu-itens'>
                            <FontAwesomeIcon icon={faMoneyBill} />
                            Poupança
                        </p>
                    </div>
                    <div>
                        <i className="fa fa-sliders"></i>
                        <p className='menu-itens'>
                            <FontAwesomeIcon icon={faSliders} />
                            Configurações
                        </p>
                    </div>
                </div>
            </div>
            <p className="exit">
                <FontAwesomeIcon icon={faSignOut} />
                Sair
            </p>
        </div>
    )
}