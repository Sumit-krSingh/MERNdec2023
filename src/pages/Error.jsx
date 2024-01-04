import { NavLink } from "react-router-dom";
export const Error =() =>{
    return(
        <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry ! page not found</h4>

                <p>
                    oops ! its seem the page your are trying to visit doesn't exist.
                    go back to home page to access other feature in website.
                </p>
                <div className="btns">
                    <button>
                    <NavLink to= "/"> Return Home</NavLink>
                    </button>

                    <button>
                    <NavLink to= "/contact"> Report issues</NavLink>
                    </button>



                </div>
            </div>
        </section>
        </>
    );
}