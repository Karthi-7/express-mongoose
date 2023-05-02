const User=require("../models/UserSchema")

const createUser=async(data)=>{
    
    const response={}
    try{
        const res=await User.create({
            name:data.name,
            email:data.email,
            gender:data.gender

        });
        response.user=res

        return response


    }
    catch(err){
        response.error=err.message
        return response

    }
}

module.exports={
    createUser
}