import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import CSS from './home.module.css';

const Home = ()=>{
    const redirect = useNavigate();

    const login = useSelector(state => state.login);
    const [user,setUser] = useState('');/*
        mas adelante voy a traer el nombre de usuario 
        del client conectado
    */

    //const mifuncion = ()=>{};

    useEffect(()=>{
        if(!login){
            redirect('/login');
        }
    },[login]);

    return(
        <div className={CSS.container}>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
        </div>
    )
};

export default Home;