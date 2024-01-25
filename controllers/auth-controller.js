const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
    try {
        res.status(200).send("welcome to world of MERN Stack by sumit by using router");


    } catch (error) {
        console.log(error)

    }
};

const register = async (req, res,next) => {
    try {
        // console.log(req.body);
        const { username, email, password, phone } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            res.status(400).json({ message: "email already exist" });
        }

        // hashing the password with the help of bcrypt in simple way

        // const saltRound =10;

        // const hash_password = await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({ username, email, password, phone })
        res.status(201).json(
            {
                msg: userCreated,
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });

    } catch (error) {
        // res.status(400).json("internal server error");
        next(error);

    }
};


// user login logic start

const login = async(req,res) =>{
    try {
        const {email,password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            res.status(400).json({ message: "invalid user credential" });

        }
        // const user = await bcrypt.compare(password, userExist.password);
const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json(
                {
                    msg:"user login successful",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });


        }else{
            res.status(401).json({message:"invalide credential at login"});
        }
        
    } catch (error) {
        res.status(500).json("internal server error")
        
    }
};


// to send user token logic start from here

const user = async (req,res) =>{

    try {
        const userData = await req.user;
        console.log(userData);
        res.status(200).json({userData});
        
    } catch (error) {
        console.log(`error from user token from frontend ${error}`)
        
    }
}


module.exports = { home, register, login, user };