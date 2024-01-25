const { Schema } = require("zod");
const { parseAsync } = require("../validators/auth-validator");



const validate = (Schema) => async(req, res, next) =>{

    try {
        const parseBody = await parseAsync(req.body);
        req.body = parseBody;
        next();
        
    } catch (err) {
        const status = 422;
        const message = "fill the input properly";
        const extraDetails = err.errors[0].message;

        const error ={
            status,
            message,
            extraDetails,
        };
        console.log(error)

        // res.status(400).json({msg: message});
        next(error)
        
    }

};



module.exports = validate;