import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


export const AdminUpdate = () =>{

    const [data, setData] = useState({
        username:"",
        email:"",
        phone:""
    });
    const params = useParams();
    const { authorizationToken } = useAuth();


    const getSingleUserData = async() =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
                method:"GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data =  await response.json();
            console.log(`single user data ${data}`);
            setData(data);
            
        } catch (error) {
            console.log(error)
        }
        

    }

    useEffect(() =>{
        getSingleUserData();
    },[])

    const handleInput =(e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]:value,
        });

    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body:JSON.stringify(data),
            });

            if(response.ok){
                toast.success("updated successfully")
            }
            else{
                toast.error("updated unsuccessfull")
            }
           
            
        } catch (error) {
            console.log(error);
            
        }

    }
    return <>
    <section>
            <main>
                <div className="section-contact">
                    <div className="container grid grid-two-column">
                        <div className="contact-form">
                            <div>

                            <h1 className="main-heading mb-3">Update Users Data</h1>
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
                                        value={data.username}
                                        onChange={handleInput}
                                        />
                                </div>
                                <div>
                                    <label htmlFor="email">email:</label>
                                    <input type="text"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        autoComplete="off"
                                        required
                                        value={data.email}
                                        onChange={handleInput} />
                                </div>
                                <div>
                                    <label htmlFor="phone">phone:</label>
                                    <input type="text"
                                        name="phone"
                                        placeholder="phone"
                                        id="phone"
                                        autoComplete="off"
                                        required
                                        value={data.phone}
                                        onChange={handleInput} />
                                </div>
                                <br />
                               
                                <div>
                                    <button type="submit" className="btn">Update</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </main>
        </section>
    
    </>
}