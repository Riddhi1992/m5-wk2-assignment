import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './App.css';

function Nav(props) {
    return (
        <div >
            <header className="App-header ps-5 pe-5">
            <h2 className="text-white">Shop 2 <span className="ps-2 pe-2 pb-1 bg-light text-dark rounded-circle" id="r-color">R</span>eact</h2>
            <div className="text-white">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span className="ps-2"> 0 items</span>
            </div>
            </header>
        </div>
    )
}

export default Nav;