const Attendance = require('../models/attendance')

module.exports = app => {
    app.get('/attendance', (req, res) => res.send('attendance get route'))

    app.post('/attendance', (req, res) => {
        Attendance.add(req.body, res)
    })
}