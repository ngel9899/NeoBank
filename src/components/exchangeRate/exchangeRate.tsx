import "../../sass/exchangeRate.sass";

export function ExchangeRate(){
    interface СurrencyProps{
        name: string;
        number: string;
    }
    function Сurrency(props: СurrencyProps){
        let name = props.name;
        let number = props.number;
        return(
            <div>
                <p>{name}<span>{number}</span></p>
            </div>
        )
    }
    return(
        <section className="exchangeRate container">
            <div className="exchangeRate__container">
                <div>
                    <div className="exchangeRate__text">
                        <h1>Exchange rate in internet bank</h1>
                        <p>Currency</p>
                    </div>
                    <div className="exchangeRate__currency">
                        <Сurrency name="USD:" number="60.78"/>
                        <Сurrency name="CNY:" number="9.08"/>
                        <Сurrency name="CHF:" number="64.78"/>
                        <Сurrency name="USD:" number="60.78"/>
                        <Сurrency name="JPY:" number="0.46"/>
                        <Сurrency name="TRY:" number="3.39"/>
                    </div>
                    <div className="exchangeRate__link">
                        <a href="">All courses</a>
                    </div>
                </div>
                <div className="exchangeRate__right_block">
                    <div className="exchangeRate__time">
                        <p>Update every 15 minutes, MSC 09.08.2022</p>
                    </div>
                    <div className="exchangeRate__img">
                        <img src="img/exchange-rate-logo.png" alt="exchange logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}