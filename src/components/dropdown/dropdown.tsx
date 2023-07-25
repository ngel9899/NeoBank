import "../../sass/dropdown.sass";

export function DropDown(){
    return(
        <details className="hidden dropdown">
            <summary>Menu</summary>
            <li><a href="">Credit card</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">Online Bank</a></li>
        </details>
    )
}