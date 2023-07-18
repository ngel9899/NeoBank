

export function ExchangeRate(){
    function Сurrency(props){
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
            <div className="exchangeRate-container">
                <div>
                    <div className="exchangeRate-text">
                        <h1>Exchange rate in internet bank</h1>
                        <p>Currency</p>
                    </div>
                    <div className="exchangeRate-currency">
                        <Сurrency name="USD:" number="60.78"/>
                        <Сurrency name="CNY:" number="9.08"/>
                        <Сurrency name="CHF:" number="64.78"/>
                        <Сurrency name="USD:" number="60.78"/>
                        <Сurrency name="JPY:" number="0.46"/>
                        <Сurrency name="TRY:" number="3.39"/>
                    </div>
                    <div className="exchangeRate-link">
                        <a href="">All courses</a>
                    </div>
                </div>
                <div>
                    <div className="exchangeRate-time">
                        <p>Update every 15 minutes, MSC 09.08.2022</p>
                    </div>
                    <div className="exchangeRate-img">
                        <img src="img/exchange_rate_logo.png" alt="exchange_logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}