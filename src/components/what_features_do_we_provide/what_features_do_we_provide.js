

export function WhatFeaturesDoWeProvide(){
    function ListItem(props){
        let text = props.text;
        return(
            <li><img src="img/check-green.png" alt="check"/>{text}</li>
        )
    }
    return(
        <section className="whatFeaturesDoWeProvide container">
            <div className="whatFeaturesDoWeProvide-img">
                <img src="img/home-function_usage_illustration.png" alt="function_usage_illustration"/>
            </div>
            <div className="whatFeaturesDoWeProvide-text">
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