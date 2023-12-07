import { datos_usuarios } from '../models/datos.js';

export const validationUser = async(req,res)=>{
    try{
        const { username, password} = req.body;
        //const usersFromDB = await datos_usuarios.findAll();

        const userFromDB = await datos_usuarios.findOne({ where: { username: username } });

        if(!userFromDB){
            return res.status(200).json({//401
                message: 'Usuario no existe',
                error: 'usuario',
                validation: false 
            });
        }
        else{
            if(userFromDB && userFromDB.password === password){
                res.status(200).json({
                    message: 'validacion correcta',
                    error: 'ninguno',
                    validation: true
                });
            }
            else{
                res.status(200).json({//401
                    message: 'Contraseña incorrecta',
                    error: 'contrasena',
                    validation: false
                });
            }
        }
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
};