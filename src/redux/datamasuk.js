const defaultState = {
    statusLogin : false,
    data : []
}

const datamasuk = (state = defaultState, action) =>{
    console.log("DataMasuk ", action.type)
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
export default datamasuk