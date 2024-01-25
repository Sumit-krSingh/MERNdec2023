import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";



export const AdminContacts = () =>{
    const[contact, setContact] = useState([]);
    const {authorizationToken} = useAuth();

    const getAllContacts = async( req, res) =>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts",{
                method :"GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`contacts detail ${data}`);
            setContact(data)
            
            
        } catch (error) {
            console.log(error);
            
        }
    };

    const deleteContact = async(id) =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            alert("deleted");
            console.log(`contacts after delete ${data}`)
            if (response.ok) {
                getAllContacts();

            }

        } catch (error) {
            console.log(error);

        }

    }


    useEffect(() =>{
        getAllContacts();
    },[])
    return <>
    <section className="admin-users-section">
        <div className="container">
            <h1>Admin Contact details</h1>

        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Delete</th>

                    </tr>
                </thead>

                <tbody>
                   {contact.map((curElem,index) =>{
                    return<tr>
                    <td>{curElem.username}</td>
                    <td>{curElem.email}</td>
                    <td>{curElem.message}</td>
                    <td><button onClick={() => deleteContact(curElem._id)}>Delete</button></td>
                </tr>
                   })}
                </tbody>
            </table>
        </div>
    </section>
    </>
}