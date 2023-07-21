import '../../sass/services_anywhere_in_the_world.sass';

export function ServicesWorld(){
    return(
        <section className="world_map container">
            <div className="world_map-text">
                <h1>You can use our services anywhere in the world</h1>
                <p>Withdraw and transfer money online through our application</p>
            </div>
            <div className="world_map-img">
                <img src="img/world_map.png" alt="world map"/>
            </div>
        </section>
    )
}