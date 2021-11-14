import { combineReducers, createStore } from "redux";
import addMasuk from "./AddMasuk";
import datamasuk from "./datamasuk";
import loginReducer from "./loginReducer"


const allReducer  = combineReducers({
  loginRedux: loginReducer,
  dataRedux : datamasuk,
  addMasuk : addMasuk
})
const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  export default store