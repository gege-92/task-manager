const { Schema, model } = require('mongoose');


const TaskSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true //elimina los espacios en blanco
    },
    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = model('Task', TaskSchema);





//para mi modelo de task voy a crear dos propiedades: name: string, completed: boolean