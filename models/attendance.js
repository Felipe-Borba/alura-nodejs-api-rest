const connection = require('../infrastructure/connection')
const moment = require('moment')

class Attendance {
    add(attendance) {
        const createTime = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const enrichAttendance = {...attendance, createTime, date}

        const sql = 'INSERT INTO Attendance SET ?'
        connection.query(sql, enrichAttendance, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
    }
}

module.exports = new Attendance