import {Header} from "../components/header/header";
import {Footer} from "../components/footer/footer";
import {DigitalСreditСard} from "../components/digitalСreditСard/digitalСreditСard";
import {Tabs} from "../components/tabs/tabs";

export function LoanPage (){
    return(
        <div>
            <Header />
            <DigitalСreditСard />
            <Tabs />
            <Footer />
        </div>
    )
}