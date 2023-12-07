import { LOGIN_ON } from './action-type.js';

const initialState = {
    login : false,
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_ON:
            return {
                ...state,
                login: action.payload
            };
        
        default:
            return {...state}
    }  
};

export default reducer;