import '../../sass/subscribe.sass';

export function Subscribe(){
    return(
        <section className="subscribe container">
            <div className="subscribe-text">
                <a>Support</a>
                <h1>Subscribe Newsletter & get</h1>
                <h2>Bank News</h2>
            </div>
            <div>
                <form action="POST" className="subscribe-form">
                    <input type="email" name='email' placeholder="Your email"/>
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </section>
    )
}