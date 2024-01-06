import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });
    const [userData, setUserData] = useState(true);

    const {user} = useAuth();

    if(userData && user){
        setContact({
            username:user.username,
            email: user.email,
            message:"",
        });

        setUserData(false)
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact",{
              method:"POST",
              headers:{
                'Content-Type':"application/json"
              },
              body:JSON.stringify(contact) 
            });
            if(response.ok){
                 setContact({
                    username:"",
                    email: "",
                    message:"",
                });
                const data = await response.json();
                console.log(data);

                alert("message send successfully");


            }
            
        } catch (error) {
            console.log("error from sending message")
            
        }
        console.log(contact);
    };
    return <>
        <section>
            <main>
                <div className="section-contact">
                    <div className="container grid grid-two-column">
                        <div className="contact-image">
                            <img src="/images/contact-us.png"
                                alt="contactUs"
                                width="500"
                                height="500" />
                        </div>

                        <div className="contact-form">
                            <div>

                            <h1 className="main-heading mb-3">Contact Us</h1>
                            </div>

                            <br />
                            <form onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="username">username:</label>
                                    <input type="text"
                                        name="username"
                                        placeholder="Username"
                                        id="username"
                                        autoComplete="off"
                                        required
                                        value={contact.username}
                                        onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="email">email:</label>
                                    <input type="text"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        autoComplete="off"
                                        required
                                        value={contact.email}
                                        onChange={handleInput} />
                                </div>
                                <br />
                                <div>
                                    <textarea name="message"
                                        id="message"
                                        cols="40"
                                        rows="7"
                                        placeholder="type message"
                                        value={contact.message}
                                        onChange={handleInput}>message</textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn">Submit</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};