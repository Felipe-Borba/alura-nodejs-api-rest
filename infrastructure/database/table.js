class table {
    init(connection) {
        this.connection = connection

        this.createAttendance()
        this.createPet()
    }

    createAttendance() {
        const sql = `CREATE TABLE IF NOT EXISTS Attendance (
            id int NOT NULL AUTO_INCREMENT, 
            client varchar(11) NOT NULL, 
            pet varchar(20), 
            service varchar(20) NOT NULL, 
            serviceStatus varchar(20) NOT NULL, 
            observations text, 
            date datetime NOT NULL, 
            createTime datetime NOT NULL, 
            PRIMARY KEY(id))`

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            } else {
                console.log('table Attendance initialized')
            }
        })
    }

    createPet() {
        const query = `CREATE TABLE IF NOT EXISTS pets (
            id int NOT NULL AUTO_INCREMENT, 
            name varchar(50),
            image varchar(200),
            PRIMARY KEY (id))`

        this.connection.query(query, error => {
            if (error) {
                console.log(error);
            } else {
                console.log('table pet initialized');
            }
        })
    }
}

module.exports = new table