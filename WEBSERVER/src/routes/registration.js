import express from "express";

import {
    postUser,
} from '../controllers/registration.controller.js';   

const registration = express.Router();

registration.post('/',postUser);


export default registration;