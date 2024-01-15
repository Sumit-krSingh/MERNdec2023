import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


export const Login =() =>{

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })

    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        // console.log(user)

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(user)
            });
            console.log("login",response);
            // console.log("res from server",res_data);
            
            
            if(response.ok){
                const res_data =  await response.json();
                toast.success("login successful");
                storeTokenInLS(res_data.token)
                setUser({
                    email:"",
                    password:"",
                });
                navigate("/");
            }else{
                toast.error("invalide data");
            }
            
        } catch (error) {
            console.log("login",error)
            
        }
    }


    return <>
    <section>
        <main>
            <div className="section-login">
                <div className="container grid grid-two-column">
                    <div className="login-image">
                        <img src="/images/login.jpg"
                         alt="login image"
                         width="400"
                         height="400" />
                    </div>

                    <div className="login-form">
                        <h2 className="main-heading mb-3">Login</h2>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div>
                            <label htmlFor="email">email</label>
                            <input type="email"
                            name="email"
                            placeholder="enter your email"
                            id="email"
                            required
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInput} 
                            />
                            </div>

                            <div>
                            <label htmlFor="password">password</label>
                            <input type="password"
                            name="password"
                            placeholder="enter your password"
                            id="password"
                            required
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInput} 
                            />
                            </div>

                            <br />
                            <button type="submit" className="btn btn-submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
};