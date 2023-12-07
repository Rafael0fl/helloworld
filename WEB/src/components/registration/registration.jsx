import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import CSS from './registration.module.css';

const Registration = ()=>{

    const redirect = useNavigate();

    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [age,setAge] = useState(0);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const info = {
            name:name,
            lastname:lastname,
            age:age,
            username:username,
            password:password
        }
        try{
            const response = await axios.post('http://localhost:3001/registracion',info);
            if(response){
                redirect('/');
            }
        } 
        catch(error){
            console.error('Error al enviar la solicitud:', error);
        }

    };

    return(
        <div className={CSS.container}>
            <form onSubmit={handleSubmit} className={CSS.form}>
                <h1>Registracion</h1>
                <label htmlFor="name">
                    <p>Nombres: </p>
                    <input 
                        type="text"
                        required
                        name="name"
                        id="name"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label htmlFor="lastname">
                    <p>Apellidos: </p>
                    <input
                        type="text"
                        required
                        name="lastname"
                        id="lastname"
                        onChange={(e)=>setLastname(e.target.value)}
                        value={lastname}
                    />
                </label>
                <label htmlFor="age">
                    <p>Edad: </p>
                    <input
                        type="number"
                        min='0'
                        max='99'
                        required
                        name="age"
                        id="age"
                        onChange={(e)=>setAge(e.target.value)}
                    />
                </label>
                <label htmlFor="username">
                    <p>Nombre de Usuario: </p>
                    <input
                        type="text"
                        required                  
                        name="username"
                        id="username"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                    />
                </label>
                <label htmlFor="password">
                    <p>Contraseña: </p>
                    <input
                        type="password"
                        required
                        name="password"
                        id="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <br></br>
                <button type='submit'>Registrarse</button>
            </form>
        </div>
    )
};

export default Registration;