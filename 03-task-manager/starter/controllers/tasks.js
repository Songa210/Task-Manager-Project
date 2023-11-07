const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const creaTeTask = (req, res) => {
    res.send('create task')
}
const getTask = (req, res) => {
    res.send('get task')
}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req, res) => {
    res.send('cselete task')
}

module.exports = {
   getAllTasks,
   creaTeTask,
   getTask,
   updateTask,
   deleteTask,
}