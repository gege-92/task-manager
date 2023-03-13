const Task = require("../models/task");




const existeTareaPorId = async( id ) => {

    const existeTarea = await Task.findById( id );

    if(!existeTarea){
        throw new Error(`No se encontro una tarea con el id: ${ id }`);
    }
    
}



module.exports = {
    existeTareaPorId
}