const { Router } = require('express');
const { check } = require('express-validator')

const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } = require('../controllers/task.controller');
const { existeTareaPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();



router.get('/', getAllTasks);

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], createTask);

router.get('/:id', [
    check('id', 'El id ingresado no un ID valido de Mongo').isMongoId(),
    check('id').custom(existeTareaPorId),
    validarCampos
], getSingleTask);

router.put('/:id', [
    check('id', 'El id ingresado no un ID valido de Mongo').isMongoId(),
    check('id').custom(existeTareaPorId),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], updateTask);

router.delete('/:id', [
    check('id', 'El id ingresado no un ID valido de Mongo').isMongoId(),
    check('id').custom(existeTareaPorId),
    validarCampos
], deleteTask);



module.exports = router;