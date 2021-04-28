const Attendance = require('../models/attendance')

module.exports = app => {
    app.get('/attendance', (req, res) => {
        Attendance.findAll(res)
    })

    app.get('/attendance/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Attendance.findById(id, res)
    })

    app.post('/attendance', (req, res) => {
        Attendance.add(req.body, res)
    })

    app.patch('/attendance/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Attendance.update(id, values, res)
    })
}