import express from 'express';

import {
    validationUser
} from '../controllers/validationUser.controller.js';

const login = express.Router();

login.post('/',validationUser);

export default login;