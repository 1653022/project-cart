import * as TYPE from '../constants/ActionTypes';
import * as Message from '../constants/Message';

var initState = Message.MSG_WELCOME;

const message = (state = initState, action) =>{
    switch(action.type){
        case TYPE.CHANGE_MSG:
            return action.msg;
             
        default: return state;
    }
}

export default message;