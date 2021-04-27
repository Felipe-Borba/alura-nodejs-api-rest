class table {
    init(connection) {
        this.connection = connection

        this.createAttendance()
    }

    createAttendance() {
        const sql = 'CREATE TABLE IF NOT EXISTS Attendance (id int NOT NULL AUTO_INCREMENT, '
            +'client varchar(50) NOT NULL, '
            +'pet varchar(20), '
            +'service varchar(20) NOT NULL, '
            +'serviceStatus varchar(20) NOT NULL, '
            +'observations text, '
            +'PRIMARY KEY(id))'

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            } else {
                console.log('table created')
            }
        })
    }
}

module.exports = new table