
export const Home =() =>{
    return(
        <>
        <main>
            <div className="section-hero">
                <div className="container grid grid-two-column">
                    <div className="hero-content">
                        <p>we give your best website development experience</p>

                        <h1>SumitSingh The Developer</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae deleniti ea temporibus illo nobis at voluptates reiciendis veniam accusamus?</p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Contact</button></a>
                            <a href="/contact"><button className="btn secondary-btn">Learn more</button></a>

                        </div>
                       
                    </div>

                    <div className="hero-image">
                    <img src="/images/homeimage.png" alt="doing coding"
                        width="400"
                        height="500" />
                    </div>
                </div>
            </div>
        </main>

        {/* second section */}
        <div className="section-analytics">
            <div className="container grid grid-four-column">
                <div className="div1">
                    <h2>50+</h2>
                    <p>registered company</p>
                </div>
                <div className="div1">
                    <h2>100.00</h2>
                    <p>Happy client</p>
                </div>
                <div className="div1">
                    <h2>50+</h2>
                    <p>Good Developer</p>
                </div>
                <div className="div1">
                    <h2>24/7</h2>
                    <p>Services</p>
                </div>
               
            </div>
        </div>


        {/* third section */}

        <div className="section-hero">
                <div className="container grid grid-two-column">
                <div className="hero-image">
                    <img src="/images/serv.png" alt="doing coding"
                        width="400"
                        height="300" />
                    </div>
                    <div className="hero-content">
                        <p>We are here to help your</p>

                        <h1>Get Start Today</h1>

                        <p> Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.</p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">Contact</button></a>
                            <a href="/contact"><button className="btn secondary-btn">Learn more</button></a>

                        </div>
                       
                    </div>

                   
                </div>
            </div>

    
        </>
    );
};