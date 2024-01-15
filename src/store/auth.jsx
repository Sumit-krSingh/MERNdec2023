import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] =useState("");
    const authorizationToken = `Bearer ${token}`;
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);

    };

    let isLoggedIn = !!token;

    // code to handle logout funtionality

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem(token)
    };
    // jwt authorization code to show user data in contect page 

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {Authorization:authorizationToken,},
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.userData)
                setUser(data.userData);
            }

        }
        catch (error) {
            console.log("error from jwt authentication")

        }
    };

    // logic to get services data from services database fro mongo

    const getServices = async () =>{
        try {
            const response = await fetch("http://localhost:5000/api/data/service",{
                method: "GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg)
            }
            
        } catch (error) {
            console.log(`error from service frontEnd: ${error}`)
            
        }
    }

    useEffect(() =>{
        getServices();
        userAuthentication();
    },[]);


    return (<AuthContext.Provider value={{ 
        isLoggedIn, storeTokenInLS, LogoutUser, user, services,authorizationToken }}>{children}</AuthContext.Provider>);
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider ");
    }

    return authContextValue;
}