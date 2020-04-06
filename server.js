const express = require('express')

const app = express()

let wa9t = new Date().getHours()
console.log(wa9t)
app.use(express.static(__dirname + '/views'))
app.get('/', (req, res) => {
    if ((wa9t < 8) && (wa9t > 17)) {
        res.sendFile(__dirname + '/views/outoffice.html')
        console.log("ccccccccc")

    } else {
        res.sendFile(__dirname + '/views/home.html')

        console.log("wa9t al dawam")
    }

})


app.listen(3000, (err) => {
    if (err) console.log("server stop")
    else console.log("serveur star ON 3000")
})