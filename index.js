import express, { request } from "express";
const app = express()
app.get("/",(req, res)=>{
    return res.status(200).json({
        message: "Holaa :)"
    })
})
app.listen(3000, ()=>{
    console.log("Servidor prendido")
})