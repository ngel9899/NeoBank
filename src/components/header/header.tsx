import {DropDown} from "../dropdown/dropdown";
import "../../sass/header.sass";

export function Header(){
    return(
            <header className="header container">
                <div className="header__logo">
                    <a href="/home"><img src="img/logo-header.png" alt="Logo NeoBank"/></a>
                </div>
                <div className="header__nav">
                    <nav>
                        <li><a href="">Credit card</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="">Resources</a></li>
                    </nav>
                </div>
                <div className="header__button">
                    <button>Online Bank</button>
                </div>
                <DropDown />
            </header>
        )
}