import { db } from "../connectDb.js";
//import { ObjectId } from "mongodb";

const coll = db.collection("makeup-members")

//POST members information when they register as a subscriber
export async function addMakeupMemberClass(req, res) {
    const newMember = req.body
    await coll.insertOne(newMember)

    .catch(err => {
        res.status(500).send(err) 
        return
    })
    getMakeupMembersClasses(req, res)
}

//GET members info so it can display everyone who registered as a subscriber and what zoom(live class) class they signed up for.
export async function getMakeupMembersClasses(req, res) {

    const newMembers = await coll.find({}).toArray()
    res.send(newMembers)
}

// export async function getMakeupMembersClasses(req, res) {
//     const newMemberMessy = await coll.get()
//     const newMembersClean = newMemberMessy.docs.map(doc => ({...doc.data(), id: doc._id}))
//     res.send(newMembersClean)
// }