const defaultState = {
    statusLogin : false,
    data : []
}

const addMasuk = (state = defaultState, action) =>{
    console.log("Data Masuk ", action.type)
    switch (action.type){
        case "ADD" :
        return {
            statusLogin : true,
            data : action.data
        }
        default :
        return state
    }
}
export default addMasuk