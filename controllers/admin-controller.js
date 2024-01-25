const User = require("../models/user-model")
const Contact = require("../models/contact-model")


const getAllUsers = async (req,res, next) =>{
    try {
        const users = await User.find({} , {password:0 });
        console.log(users);

        if(!users || users.length===0){
             return res.status(404).json({message:"No user find"});
        }

        return res.status(200).json(users);
        
    } catch (error) {
        next(error)
        
    }

};

// logic to get single user data

const getUserById = async(req, res, next) =>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id: id},{password : 0});
        res.status(200).json(data);
        
    } catch (error) {
        next(error);
        
    }
};

// ***__________________logic for update data________*****

const updateUserById = async(req,res, next) =>{
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await User.updateOne({_id: id}, {
            $set:updatedUserData
        });
        return res.status(200).json(updatedData);
        
    } catch (error) {
        next(error);
        
    }
};

// logic to delete user detail from admin user

const deleteUserById = async (req, res, next) =>{
    try {

        const id = req.params.id;
        await User.deleteOne({_id : id});
        res.status(200).json({message:"user detail successfully deleted"})
        
    } catch (error) {
        next(error);
        
    }
}



// function to get all contact for admin

const getAllContacts = async(req,res,next) =>{
    try {

         const contacts = await Contact.find();
         console.log(contacts)
         if(!contacts || contacts.length ===0){
            return res.status(404).json({message:"No contact find"});
         }
         return res.status(200).json(contacts);
        
    } catch (error) {
        next(error);
        
    }
};
// logic to delete only contact data from database
const deleteContactById= async (req, res, next) =>{
    try {

        const id = req.params.id;
        await Contact.deleteOne({_id : id});
        res.status(200).json({message:"contact successfully deleted"})
        
    } catch (error) {
        next(error);
        
    }
}

module.exports = {getAllUsers, getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById};