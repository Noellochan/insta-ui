

import { POST_POPUP ,ADD_USERDETAIL} from "./action";

export const reducer=(store,{type,payload})=>{

switch (type) {
    case POST_POPUP:
        return {...store,ispopup:payload}
        case ADD_USERDETAIL:
            return{...store,userdetails:payload}

    default:
        return store;
}

}
