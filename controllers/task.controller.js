const { response } = require("express");
const Task = require('../models/task')



const getAllTasks = async(req, res = response) => {

    const tasks = await Task.find();


    res.json({
        msg: 'getAllTasks',
        tasks
    });
}


const createTask = async(req, res = response) => {

    const { name, completed } = req.body;

    const tasks = new Task({ name, completed });

    //Guardo en la DB
    await tasks.save();

    res.json({
        msg: 'createTask',
        tasks
    });
}


const getSingleTask = async(req, res = response) => {

    const { id } = req.params;

    const tasks = await Task.findById( id );

    // existeTareaPorId --> helpers/db-validators
    // if(!task){
    //     throw new Error(`No se encontro una tarea con el id: ${ id }`);
    // }

    res.json({
        msg: 'getSingleTask',
        tasks
    });
}


const updateTask = async(req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const tasks = await Task.findByIdAndUpdate( id, resto, { new: true });

    // existeTareaPorId --> helpers/db-validators
    // if(!task){
    //     throw new Error(`No se encontro una tarea con el id: ${ id }`);
    // }

    // task.name = name;
    // await task.save();

    res.json({
        msg: 'updateTask',
        tasks
    });
}


const deleteTask = async(req, res = response) => {

    const { id } = req.params

    const tasks = await Task.findByIdAndDelete( id );

    // existeTareaPorId --> helpers/db-validators
    // if(!task){
    //     throw new Error(`No se encontro una tarea con el id: ${ id }`);
    // }

    res.json({
        msg: 'deleteTask',
        tasks
    });
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}
