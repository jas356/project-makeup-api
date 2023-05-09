import express  from "express";
import cors from "cors"

const PORT = 3001

const app = express()

app.use(cors())
app.use(express.json())


//My API points/ routes will be insterted below:
app.get("/", (req, res) => {
    res.send(`My api is working`)
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})