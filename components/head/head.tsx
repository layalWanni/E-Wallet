import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className="head-bar">
            <div className="input-group mb-2 col-md-3" style={{ width: "300px" }}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Pesquise aqui..." aria-label="Pesquise aqui..."
                    aria-describedby="basic-addon1" />
            </div>
            <div className="user">
                <FontAwesomeIcon icon={faUser} />
                Layal@AlWani.com
            </div>

            <div className="corner">
                <i className="far fa-sun"></i>
                <i className="far fa-bell"></i>
            </div>
        </div>
    )
}