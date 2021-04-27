module.exports = app => {
    app.get('/attendance', (req, res) => res.send('attendance get route'))

    app.post('/attendance', (req, res) => {
        console.log(req.body)
        res.send('attendance post route')
    })
}