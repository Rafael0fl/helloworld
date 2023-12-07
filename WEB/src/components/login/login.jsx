import { useState,useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import CSS from './login.module.css';
import { setLoginON } from '../../redux/actions.js';

const Login = ()=>{

    const redirect = useNavigate();
    const dispatch = useDispatch();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async(event)=>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/login', {
                username : username ,
                password : password
            });
            if(response.data.validation){
                dispatch(setLoginON());
                redirect('/');
            }
            else{
                if(response.data.error==='usuario'){
                    alert("Usuario incorrecto");
                }
                else if(response.data.error==='contrasena'){
                    alert("Contraseña incorrecta");
                }
            }
        }catch(error){
            console.log('Hubo un error al enviar los datos al servidor:', error);
        }
    };
    const handleRegistration = ()=>{
        redirect('/registration');
    };

    return(
        <div className={CSS.container}>
            <form  onSubmit={handleSubmit} className={CSS.form}>
                <h1>LOGIN</h1>
                <label htmlFor="username" className={CSS.label}>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        required
                        className={CSS.inputText}
                        placeholder='usuario'
                    />
                </label>
                <label htmlFor="password" className={CSS.label}>
                    <input 
                        type="password" 
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className={CSS.inputText}
                        placeholder='contraseña'
                        required
                    />
                </label>
                <button type="submit">INGRESAR</button>
                <p>o</p>
                <button onClick={handleRegistration}>REGISTRARSE</button>
            </form>
        </div>
    )
};

export default Login;