import "../../sass/whatFeaturesDoWeProvide.sass";

export function WhatFeaturesDoWeProvide(){
    interface ListItemProps{
        text: string;
    }
    function ListItem(props: ListItemProps){
        let text = props.text;
        return(
            <li><img src="img/check-green.png" alt="check"/>{text}</li>
        )
    }
    return(
        <section className="whatFeaturesDoWeProvide container">
            <div className="whatFeaturesDoWeProvide__img">
                <img src="img/home-function-usage-illustration.png" alt="function usage illustration"/>
            </div>
            <div className="whatFeaturesDoWeProvide__text">
                <h1>We Provide Many Features You Can Use</h1>
                <p>You can explore the features that we provide with fun and have their own functions each feature</p>
                <ul>
                    <ListItem text="Powerfull online protection."/>
                    <ListItem text="Cashback without borders."/>
                    <ListItem text="Personal design"/>
                    <ListItem text="Work anywhere in the world"/>
                </ul>
            </div>
        </section>
    )
}