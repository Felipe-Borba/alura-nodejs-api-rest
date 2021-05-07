const connection = require('../infrastructure/connection')
const moment = require('moment')
const axios = require('axios')

class Attendance {
    add(attendance, response) {
        const createTime = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const validateDate = moment(date).isSameOrAfter(createTime)
        const validateClient = attendance.client.length >= 5
        const validations = [
            {
                name: 'data',
                valid: validateDate,
                message: 'date should be equal or grater them todays date'
            },
            {
                name: 'client',
                valid: validateClient,
                message: 'client should have at least 5 characters'
            }
        ]

        const errors = validations.filter(field => !field.valid)
        const existErrors = errors.length

        if (existErrors) {
            response.status(400).json(errors)
        } else {
            const enrichAttendance = { ...attendance, createTime, date }

            const sql = 'INSERT INTO Attendance SET ?'
            connection.query(sql, enrichAttendance, (error, result) => {
                if (error) {
                    response.status(400).json(error)
                } else {
                    response.status(201).json(attendance)
                }
            })
        }
    }

    findAll(response) {
        const sql = 'SELECT * FROM Attendance'

        connection.query(sql, (error, result) => {
            if (error) {
                response.status(500).json(error)
            } else {
                response.status(200).json(result)
            }
        })
    }

    findById(id, response) {
        const sql = 'SELECT * FROM Attendance WHERE id=?'

        connection.query(sql, id, (error, result) => { 
            console.log(error,result);
            console.log(result.length);
            if (error || result.length <= 0) {
                response.status(500).json({error})
            } else {
                const attendanceResponse = result[0]
                const cpf = attendanceResponse.client
                axios.get(`http://localhost:8082/${cpf}`)
                    .then(res => {
                        attendanceResponse.client = res.data
                        response.status(200).json(attendanceResponse)
                    })
                    .catch(err => {
                        response.status(400).json(err)
                    })
            }
        })
    }

    update(id, values, response) {
        if (values.date) {
            values.date = moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE Attendance SET ? WHERE id=?'

        connection.query(sql, [values, id], (error, result) => {
            if (error) {
                response.status(400).json(error)
            } else {
                response.status(200).json({ ...values, id })
            }
        })
    }

    delete(id, response) {
        const sql = 'DELETE FROM Attendance WHERE id=?'

        connection.query(sql, id, (error, result) => {
            if (error) {
                response.status(400).json(error)
            } else {
                response.status(200).json({ id })
            }
        })
    }
}

module.exports = new Attendance