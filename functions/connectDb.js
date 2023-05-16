import { MongoClient } from "mongodb";
import { mongoUri } from "./secrets.js";

const client = new MongoClient(mongoUri)

export const db = client.db("jasmine")

export const secretKey = "94875t58bfe87t9jr797hr49e7@#%#%$%$dchicfhifuhir"