const defaultState = {
    statusLogin : false,
    data : []
}

const dataProductReducer = (state = defaultState, action) =>{
    console.log("DataProduct ", action.type)
    switch (action.type){
        case "GETALL" :
        return {
            statusLogin : true,
            data : action.data
        }
        default :
        return state
    }
}
export default dataProductReducer