 
const inisialState ={
    token:null,
    user:{
        fullName:'',
        phone:'',
        email:''
    },
    authenticate:false,
    authenticating:false 
}

 const authReducer = (state =inisialState,action)=>{
  switch (action.type){
     case" LOGIN_FAILED":
        state = {
            ...state,
             authenticating:false

      
           }
           break
           case 'LOGIN_SUCCESS':
               state ={
                   ...state,
                   user:action.payload.user,
                   token:action.payload.token,
                   authenticate:true
               }
               
               break
                
                   case 'LOGOUT_SUCCESS':
                    state={
                        ...inisialState
                    }
                    break
                    
           default:
        
        }

 return state
};
export default authReducer