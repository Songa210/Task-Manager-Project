const express = require('express');
const router = express.Router();

const { getAllTasks, creaTeTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(creaTeTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
   


 