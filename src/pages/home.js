import {Header} from "../components/header/header";
import {CardsDesign} from "../components/card_design/cards_design";
import {WhatFeaturesDoWeProvide} from "../components/what_features_do_we_provide/what_features_do_we_provide";
import {ExchangeRate} from "../components/exchange_rate/exchange_rate";
import {ServicesWorld} from "../components/services_anywhere_in_the_world/services_anywhere_in_the_world";
import {Subscribe} from "../components/subscribe/subscribe";

export function Home (props){
    return(
        <div>
            <Header />
            <CardsDesign />
            <WhatFeaturesDoWeProvide />
            <ExchangeRate />
            <ServicesWorld />
            <Subscribe />
        </div>
    )
}