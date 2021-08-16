const USER = require('../model/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
 module.exports={
register:async(req,res)=>{
USER.findOne({email:req.body.email})
.exec((error,user)=>{
    if(user) return  res.status(400).json({
        message:'Email already been used'
    });
     const hashedPasswor =  bcrypt.hashSync(req.body.password, 10);
    const password = hashedPasswor;
    const fullName = req.body.fullName
    const email = req.body.email
    const phone = req.body.phone

    const _user = new USER({
        fullName,
        email,phone,password
    })

    _user.save((error,data) =>{
        if(error){
            return res.status(400).json({
                message:'Somthing went wrong!'
            })
        }
        if(data){
            return res.status(201).json({
                message:'User created Successfuly..!'  ,
            data          })

        }
    })
});

},
signIn:async(req,res)=>{
    USER.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){
            return res.status(400).json({error}) }
            if(user){
                if (user.password === req.body.password && user.role === 'user'){
                    const token = jwt.sign({_id:user._id,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
                    const {_id, fullName,email,phone,role} = user
                    res.cookie('token',token,{expiresIn:'1h'})
                    res.status(200).json({
                        token,
                        user:{
                          _id,  fullName,email,phone,role
                        }                
                    })
                }else{
                    return res.status(400).json({
                        message:'Invalid Password'
                    })
                }

            }else{
                return res.status(400).json({message:'SomeThing went wrong !'})
            }
       
    })
} 
 

}