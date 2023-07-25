import {Header} from "../components/header/header";
import {CardsDesign} from "../components/cardDesign/cardDesign";
import {WhatFeaturesDoWeProvide} from "../components/whatFeaturesDoWeProvide/whatFeaturesDoWeProvide";
import {ExchangeRate} from "../components/exchangeRate/exchangeRate";
import {ServicesWorld} from "../components/servicesAnywhereInTheWorld/servicesAnywhereInTheWorld";
import {Subscribe} from "../components/subscribe/subscribe";
import {Footer} from "../components/footer/footer";

export function Home (){
    return(
        <div>
            <Header />
            <CardsDesign />
            <WhatFeaturesDoWeProvide />
            <ExchangeRate />
            <ServicesWorld />
            <Subscribe />
            <Footer />
        </div>
    )
}