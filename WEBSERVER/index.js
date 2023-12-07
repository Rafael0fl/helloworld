import server from "./src/server.js";
import { sequelize } from "./src/database/db.js";


const main = async ()=>{

    server.listen(3001,()=>{
        console.log("Buda esta meditando en el puerto 3001");
    });

    try{
        await sequelize.authenticate();//force:true
        await sequelize.sync();
        console.log('Conexion exitosa al nirvana');
    } 
    catch(error){
        console.error('No se ha podido alcanzar la iluminacion',error);
    }
};

main();





