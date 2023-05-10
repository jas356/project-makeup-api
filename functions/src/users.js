import { db } from "../connectDb.js";
//import { secretKey } from "../secrets.js";

const collection = db.collection("users")

export async function signup(req, res) {
    const { email, password } = req.body
    if(!email || !password) {
        res.status(400).send({message: "Email and password are both required. Password must be 6 characters or more"})
        return
    }

    const newUser = {
        email: email.toLowerCase(),
        password,
        createdAt: new Date()
    }
    await collection.add(newUser)
    //Once the user is added, it will log them in...
    login(req, res)
}

export async function login(req, res) {
    const { email, password } = req.body
    if(!email || !password) {
        res.status(400).send({message: "Email and Password are both required."})
        return
    }
}