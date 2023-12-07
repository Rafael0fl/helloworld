import axios from 'axios';

import { LOGIN_ON } from './action-type.js';


export const setLoginON = ()=>{
    return {
        type: LOGIN_ON,
        payload: true
    }
};

/*
export const getStatusServer = ()=>{
    return  async function(dispatch){
        try{
            const response = await axios.get('https://back-end-portfolio-3pap.onrender.com/Hola');
            dispatch({
                type: STATUS_SERVER,
                payload: response.data.status
            });
        }catch(error){
            console.log('error dont send "hola" :(' )
        }
    }
};
*/