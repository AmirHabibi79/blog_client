import {LOGIN,LOGOUT} from "./type"
const reducer=(state=[false,""],action)=>{
    switch(action.type){
        case LOGIN:
            return [true,action.payload]
        case LOGOUT:
            return [false,""]
        default:
            return state
    }

}

export default reducer