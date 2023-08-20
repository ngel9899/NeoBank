import "../../sass/digitalСreditСard.sass";


export function DigitalСreditСard(){
    return(
        <section className="digitalСreditСard container">
            <div className="digitalСreditСard__container">
                <div className="digitalСreditСard__left-bloc">
                    <div className="digitalСreditСard__text">
                        <h1>Platinum digital credit card</h1>
                        <p>Our best credit card. Suitable for everyday spending and shopping.
                            Cash withdrawals and transfers without commission and interest.</p>
                    </div>
                    <div className="digitalСreditСard__conditions">
                        <div data-descr="When repaying the full debt up to 160 days.">
                            <h4>Up to 160 days</h4>
                            <p>No percent</p>
                        </div>
                        <div data-descr="Over the limit willaccrue percent">
                            <h4>Up to 600 000 ₽</h4>
                            <p>Credit limit</p>
                        </div>
                        <div data-descr="Promotion valid until December 31, 2022.">
                            <h4>0 ₽</h4>
                            <p>Card service is free</p>
                        </div>
                    </div>
                    <div className="digitalСreditСard__button">
                        <button>Apply for card</button>
                    </div>
                </div>
                <div className="digitalСreditСard__image">
                    <img src="img/platinum-digital-credit-card.png" alt="platinum digital credit card"/>
                </div>
            </div>
        </section>
    )
}