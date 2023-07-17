import {Header} from "../components/header/header";
import {CardsDesign} from "../components/card_design/cards_design";
import {WhatFeaturesDoWeProvide} from "../components/what_features_do_we_provide/what_features_do_we_provide";

export function Home (props){
    return(
        <div>
            <Header />
            <CardsDesign />
            <WhatFeaturesDoWeProvide />
        </div>
    )
}