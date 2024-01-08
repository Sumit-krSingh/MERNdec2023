// import { useEffect, useState } from "react";

import { useAuth } from "../store/auth";


export const Service = () => {

    const {services} = useAuth();
    return (
        <>
            <section className="section-services">
                <div className="container">
                    <h1 className="main-heading">Services</h1>
                </div>

                <div className="container grid grid-three-cols">
                    {services.map((curElem,index) =>{
                        const {service,description,price,provider} = curElem;

                        return(<div className="card" key={index}>
                        <div className="card-img">

                            <img src="/images/design.jpg" alt="service info"
                                width="300"
                                 />
                        </div>

                        <div className="card-details">
                            <div className="grid grid-two-column">
                                <p>{price}</p>
                                <p>{provider}</p>
                            </div>
                            <h2>{service}</h2>
                            <p>{description}</p>

                        </div>
                    </div>)
                    })}
                    
                </div>
            </section>

        </>
    );
};