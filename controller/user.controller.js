const serviceUser=require("../service/service.user")
const createUser=async(req,res)=>{
    try{
        const response=await serviceUser.createUser(req.body);
        console.log("res",response)
        if(response.error){
            return res.send({
                messgae:"something went wrong"
            })
        }
        else{
            res.send({data:response.user})

        }
       
  
        


    }
    catch(err){
        return res.send({error:err.message})
        
    }


}

module.exports={
    createUser
}