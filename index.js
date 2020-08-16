const express = require("express")
const bodyParse = require("body-parser")
const app = express()

app.use(bodyParse.urlencoded({ extended: false }))
app.use(bodyParse.json())

app.get("/", function (req, res) {
	res.send("Hola Munto!")
})

app.listen(3000, () => {
	console.log("Server initialize...")
})