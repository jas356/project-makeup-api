import functions from "firebase-functions"
import express  from "express";
import cors from "cors";
import { login, signup } from "./src/users.js";
import { addMakeupMemberClass, getMakeupMembersClasses } from "./src/members.js"

// const PORT = 3001

const app = express() // creates express app

app.use(cors())     //the () after cors is invoking the code running cors and same for express.json()
app.use(express.json())

//Routes (API functions) User Routes
app.post("/signup", signup) //Signup invokes the function
app.post("/login", login) //Login invokes function

app.get("/makeup-member-classes", getMakeupMembersClasses)
app.post("/makeup-members", addMakeupMemberClass)
//Routes
app.get("/", (req, res) => {
  res.send(`My api is working`)
 })



export const api = functions.https.onRequest(app)