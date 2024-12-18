const jwt = require("jsonwebtoken");
const jwt_secret = "AAddhsdsjfherdbjfdjfkdfhrukaopjf";
const jwt_exphire = "6h";

const tokenEncode = (phoneNumber,user_id)=>{
    let exphire = { expiresIn: jwt_exphire}
    let payload = {phoneNumber:phoneNumber,user_id:user_id};

    return jwt.sign(payload,jwt_secret,exphire);
}

const tokenDecode = (token)=>{
    try {
        return jwt.verify(token,jwt_secret);
    } catch (error) {
        return res.json({error: error})
    }
}

module.exports ={
    tokenEncode,
    tokenDecode
}