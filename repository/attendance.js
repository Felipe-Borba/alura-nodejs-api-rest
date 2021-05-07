const query = require('../infrastructure/database/queries')

class Attendance {
    add(attendance) {
        const sql = 'INSERT INTO Attendance SET ?'
        return query(sql, attendance)
    }

}

module.exports = new Attendance