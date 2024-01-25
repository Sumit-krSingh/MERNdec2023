require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router")

const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


// handling the cors problem
const corsOption ={
    origin:"http://localhost:5173",
    methods:"PUT,POST, GET, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOption));

// to show the data in json with below code middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)

app.use("/api/admin",adminRoute)



app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() =>{

    
    app.listen(PORT, () =>{
        console.log(`server is running at port ${PORT}`);
    });
});
