import {DropDown} from "../dropdown/dropdown";


export function Header(){
    return(
            <header className="header container">
                <div className="header-logo">
                    <a href="/home"><img src="img/logo-header.png" alt="Logo NeoBank"/></a>
                </div>
                <div className="header-nav">
                    <nav>
                        <li><a href="">Credit card</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="">Resources</a></li>
                    </nav>
                </div>
                <div className="header-button">
                    <button>Online Bank</button>
                </div>
                <DropDown />
            </header>
        )
}