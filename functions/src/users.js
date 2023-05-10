import { db } from "../connectDb.js";
//import { secretKey } from "../secrets.js";
//import { ObjectId } from "mongodb";
//import jwt from "jsonwebtoken"

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
    await collection.insertOne(newUser)
    //Once the user is added, it will log them in...
    login(req, res)
}

export async function login(req, res) {
    const { email, password } = req.body
    if(!email || !password) {
        res.status(400).send({message: "Email and Password are both required."})
        return
    }
    const user = await collection.findOne({email: email.toLowerCase(), password})
    
    if(!user) {
        res.status(400).send({message: "Invalid Email and/or password. Try to login again."})
    }
    delete user.password
   // const token = jwt.sign(user, secretKey)
   //res.send({user, token})
}