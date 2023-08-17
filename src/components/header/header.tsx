import {DropDown} from "../dropdown/dropdown";
import "../../sass/header.sass";
import {NavLink} from "react-router-dom";

export function Header(){
    return(
            <header className="header container">
                <div className="header__logo">
                    <a href="/home"><img src="img/logo-header.png" alt="Logo NeoBank"/></a>
                </div>
                <div className="header__nav">
                    <nav>
                        <NavLink to="/loanPage" className={({ isActive }) =>(isActive ? "active-header" : "no-active-header")}>Credit card</NavLink>
                        <NavLink to="/" className={({ isActive }) =>(isActive ? "active-header" : "no-active-header")}>Product</NavLink>
                        <NavLink to="/" className={({ isActive }) =>(isActive ? "active-header" : "no-active-header")}>Account</NavLink>
                        <NavLink to="/" className={({ isActive }) =>(isActive ? "active-header" : "no-active-header")}>Resources</NavLink>
                    </nav>
                </div>
                <div className="header__button">
                    <button>Online Bank</button>
                </div>
                <DropDown />
            </header>
        )
}