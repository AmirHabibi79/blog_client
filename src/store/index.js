import {createStore,combineReducers} from "redux"
import Reducer from "./reducer"
const allreducer=combineReducers({
    auth:Reducer
})
const store=createStore(allreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store