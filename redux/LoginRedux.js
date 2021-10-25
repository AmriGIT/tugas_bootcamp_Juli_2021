const defaultState = {
    statusLogin : false,
}

const LoginReducer = (state = defaultState, action) =>{
    console.log("Login Reducer", action.type)
    switch (action.type){
        case "Login_Ok":
            return{
                statusLogin : true
            }
            default : 
            return state
    }
}
export default LoginReducer