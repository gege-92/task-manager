const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGO_CNN);

        console.log("Base de datos online");

    } catch (error) {
        
        console.log(error);
        throw new Error('Error al iniciar la conexion con la DB');

    }

}


module.exports = {
    dbConnection
}
