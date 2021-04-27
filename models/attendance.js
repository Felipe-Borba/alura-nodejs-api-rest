const connection = require('../infrastructure/connection')
const moment = require('moment')

class Attendance {
    add(attendance, response) {
        const createTime = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const validateDate = moment(date).isSameOrAfter(createTime)
        const validateClient = attendance.client.length >= 5
        const validations = [
            {
                name:'data',
                valid: validateDate,
                message: 'date should be equal or grater them todays date'
            },
            {
                name:'client',
                valid: validateClient,
                message: 'client should have at least 5 characters'
            }
        ]

        const errors = validations.filter(field => !field.valid)
        const existErrors = errors.length

        if (existErrors) {
            response.status(400).json(errors)
        } else {
            const enrichAttendance = {...attendance, createTime, date}

            const sql = 'INSERT INTO Attendance SET ?'
            connection.query(sql, enrichAttendance, (error, result) => {
                if (error) {
                    response.status(400).json(error)
                    console.log(error)
                } else {
                    response.status(201).json(result)
                    console.log(result)
                }
            })
        }
    }
}

module.exports = new Attendance