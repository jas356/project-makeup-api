import { db } from "../connectDb.js";
//import { secretKey } from "../secrets.js";
//import { ObjectId } from "mongodb";
//import jwt from "jsonwebtoken"

const collection = db.collection("makeup-members")

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
    const users = await collection
    .where("email", "==", email.toLowerCase())
    .where("password", "==", password)
    .get()
    let user = users.docs.map(doc => ({...doc.data(), id: doc._id}))[0] //.map is mapping through the docs and adding a new ID for each new user and o is giving the first person in the array.
    if(!user) {
        res.status(400).send({message: "Invalid Email and/or password. Try to login again."})
    }
    //delete user.password
    //const token = jwt.sign(user, secretKey)
    //res.send({user, token})
}