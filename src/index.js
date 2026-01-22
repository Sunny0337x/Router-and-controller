import express from "express"

const app = express()


app.get("/",(request,response)=>{
    response.send("hello world ")
})

app.get("/about",(request,response)=>{
    response.send("this is about page")
})

app.get("/feedback",(request,response)=>{
response.send("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF")
})


app.listen(3000,()=>{
    console.log("port 3000 ");
    
})