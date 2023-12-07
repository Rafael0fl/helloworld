import { datos_usuarios } from '../models/datos.js';


export const postUser = async(req,res)=>{
    const {name,lastname,age,username,password} = req.body;
    
    try{
        const usersFromDB = await datos_usuarios.findAll();

        const userRegistered = usersFromDB.some(user => user.username === username);
        //const userRegistered = usersFromDB.findOne({where:{ username:username }});

        if(userRegistered){
            return res.status(400).json({ message: 'El usuario ya está registrado.' });
        }

        const newUser = await datos_usuarios.create({
            name:name,
            lastname:lastname,
            age:age,
            username:username,
            password:password
        });

        res.status(200).json(newUser);
    } 
    catch(error){
        return res.status(500).json({message:error.message})
    }
};

