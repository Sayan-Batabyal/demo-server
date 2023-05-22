import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
const data={
    lineLabel:["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4", ""],
    lineData:[
        [200, 380, 260, 206, 260, 300, 250, 220, 450],
        [100, 400, 300, 150, 290, 440, 350, 180, 250]
    ]
}

app.get('/',(req,res)=>{
res.send("Welcome")
})

app.post("/api/data",(req,res)=>{
   res.status(200).json(data);
})

app.listen(8000,()=>{
console.log("connected");
})