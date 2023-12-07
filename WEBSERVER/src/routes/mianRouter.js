import express from 'express';

const mainRouter = express.Router();


import saludo from './saludo.js';
import registration from './registration.js';
import login from './login.js';

mainRouter.use('/',saludo);
mainRouter.use('/registration',registration);
mainRouter.use('/login',login);


export default mainRouter;