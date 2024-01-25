const {z} = require("zod");

// creating schema for login
// const loginSchema = z.object({
//     email: z
//     .string({required_error: "Email is required"})
//     .trim()
//     .email({message:"invalide email"})
//     .min(3, {message:"Name must be atleast 3 character"})
//     .max(255, {message: "Name must be not greater then 255 char"}),

//     password: z
//     .string({required_error:"password is required"})
//     .min(6,{message:"password must be atleast in 6 characters"})
//     .max(1024,{message:"password must be not greater than 1024 characters"}),

// });


// creating schema for validation at registeration

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message:"Name must be atleast 3 character"})
    .max(255, {message: "Name must be not greater then 255 char"}),
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message:"invalide email"})
    .min(3, {message:"Name must be atleast 3 character"})
    .max(255, {message: "Name must be not greater then 255 char"}),

   

    phone: z
    .string({required_error:"phone number is required"})
    .trim()
    .min(10,{message:"phone number must be 10 digit"})
    .max(12,{message:"phone number must be 12 digit"}),
    password: z
    .string({required_error:"password is required"})
    .min(6,{message:"password must be atleast in 6 characters"})
    .max(1024,{message:"password must be not greater than 1024 characters"}),


   


});

module.exports = signupSchema