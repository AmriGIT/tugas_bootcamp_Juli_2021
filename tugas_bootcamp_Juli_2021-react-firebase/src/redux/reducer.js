const defaultState = {
    statusLogin : false,
    token : ""
  }
  const reducer =(state = defaultState, action)=>{
    console.log("state", state);
    console.log("action", action);
  
    switch (action.type) {
      case "LOGIN_OK":
        return{
          statusLogin : true,
          token : action.payload,
        }
        
      default:
        return state 
    }
  }

  export default reducer