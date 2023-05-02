const controller=require("../controller/user.controller")
const userRoutes=(app)=>{
    app.post('/api/v1/userData',controller.createUser)

}

module.exports=userRoutes
